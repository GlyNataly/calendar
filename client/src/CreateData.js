const daysNames = ["mo","tu","we","th","fr","sa","su"];

export const createHours = (busy = false) => {
    let hours = [];
    for(let i = 0; i < 24; i++) {
        hours[i] = { id: i, busy };
    }
    return hours;
}

const createDays = () => {
    let days = [];

    for(let i = 0; i < daysNames.length; i++) {
        days[i] = { id: i, name: daysNames[i], hours: createHours() }
    }
    return days;
}

export default createDays;