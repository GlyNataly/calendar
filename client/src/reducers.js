import createDays, { createHours } from "./CreateData";
import { CELL_MOUSE_MOVE, ALL_DAY_CLICK, CELL_MOUSE_DOWN, CLEAR, GET_DATA } from "./actions";


const initState = {
    days: createDays()
};
let calendarApp = (state = initState, action) => {  
    switch(action.type) {
        case CELL_MOUSE_DOWN:
            if(!state.days[action.day].hours[action.hour].busy) {
                return {
                    ...state,
                    days: setBusyDay(state, action),
                    mouseDown: true
                }
            }
            return state;            
        case CELL_MOUSE_MOVE:
            if(!action.lButtonPressed) {
                return {
                    ...state,
                    mouseDown: false
                }
            }
            if(state.mouseDown) {
                return {
                    ...state,
                    days: setBusyDay(state, action) 
                };
            }
            return state;
          
        case ALL_DAY_CLICK:            
            const allDayBusy = state.days[action.day].hours.every(h => h.busy);
            return {
                ...state,
                days: state.days.map(d => {
                    if(d.id === action.day) {
                        return { ...d, hours: createHours(!allDayBusy) };
                    }
                    return d;
                })
            }  
        case CLEAR:
            return {
                ...state,
                days: createDays()
            }
        case GET_DATA:
            return {
                ...state,
                days: action.data
            }
        default:
            return state;
    }
}

export default calendarApp;

const setBusyDay = (state, action) => (
    state.days.map(d => {
        if (d.id === action.day) {
            return {
            ...d, hours: d.hours.map(h => {
                if (h.id === action.hour) {
                    return { ...h, busy: true };
                }
                return h;
            })
            };
        }
        return d;
    })
)
