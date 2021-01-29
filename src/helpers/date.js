export const parsingDMY = (date) => {
    const obj = new Date(date)
    console.log(obj.getTime())
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    // return `${obj.getDate()} ${month[obj.getMonth()]} ${obj.getFullYear()}`
    return obj.toLocaleString('en-US', {timeZone: 'America/New_York'})
}