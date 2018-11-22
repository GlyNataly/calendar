import createDays from "./CreateData";

export const CELL_MOUSE_MOVE = 'CELL_MOUSE_MOVE';
export const ALL_DAY_CLICK = 'ALL_DAY_CLICK';
export const CELL_MOUSE_DOWN = 'MOUSE_DOWN';
export const CELL_MOUSE_UP = 'MOUSE_UP';
export const CLEAR = 'CLEAR';
export const GET_DATA = 'GET_DATA';

export const cellMouseMove = (lButtonPressed, day, hour) => ({
    type: CELL_MOUSE_MOVE,
    lButtonPressed,
    day,
    hour
})

export const allDayClick = (day) => ({
    type: ALL_DAY_CLICK,
    day
})

export const cellMouseDown = (day, hour) => ({
    type: CELL_MOUSE_DOWN,
    day,
    hour
})

export const cellMouseUp = () => ({
    type: CELL_MOUSE_UP
})

export const clear = () => ({
    type: CLEAR
})

const apiUri = 'http://localhost:3001/api';
const serverDataToDays = (serverDays) => {
    const days = createDays();
    
    for (const day of days) {
        const serverDay = serverDays[day.name];

        if(serverDay) {            
            for (const period of serverDay) {
                const from = Math.floor(period.bt / 60);
                const to = Math.ceil(period.et / 60); 
                
                for(let i = from; i < to; i++) {
                    day.hours[i].busy = true;
                }
            }
        }
    }
    return days;
}

const daysToServerData = (days) => {
    let data = {};

    for (const day of days) {
        const serverHours = [];
        let first = null;

        for (const hour of day.hours) {
            const minutes = hour.id * 60;
            
            if(hour.busy && first === null) {
                first = minutes;
            }
            if(!hour.busy && first !== null) {                
                serverHours.push({bt: first, et: minutes - 1})
                first = null;
            }
        }
        if(first !== null) {
            serverHours.push({bt: first, et: 24 * 60 - 1})
        }
        data[day.name] = serverHours;
    }
    return data;
}

export const getData = () => {
    return dispatch => {
        fetch(apiUri).then(res => res.json()).then(data => {
            dispatch({
                type: GET_DATA,
                data: serverDataToDays(data)
            })
        })
    }
}

export const setData = (data) => {
    fetch(apiUri, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(daysToServerData(data))
    })
}