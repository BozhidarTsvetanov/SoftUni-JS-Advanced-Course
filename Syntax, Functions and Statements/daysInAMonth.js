function daysInAMonth(month, year) {
    let day = new Date(year, month, 0).getDate()
    console.log(day);
    
}
daysInAMonth(1, 2012)
