export const getMondayOfLastWeek = ():Date => {
    let today:Date = new Date();
    let mondayOfLastWeek:number = today.setDate(today.getDate() - today.getDay() + 1 - 7);
    return (new Date(mondayOfLastWeek));
}

export const addDaysToDate = (date:Date, days:number):Date => {
    let tempDate:Date = new Date(date);
    return (new Date(tempDate.setDate(tempDate.getDate() + days)));
}