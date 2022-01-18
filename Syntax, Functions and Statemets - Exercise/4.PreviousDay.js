function day(year, month, day) {
    let formatedDay = `${year}-${month}-${day}`;
    let event = new Date(formatedDay);
    event.setDate(event.getDate() - 1)

    console.log(`${event.getFullYear()}-${event.getMonth() + 1}-${event.getDate()}`);
}
day(2016, 10, 1)