const getTime =()=> {
    let currentDate = new Date();
    if (currentDate.getSeconds() > 9 ) {
        return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    } else {
        return currentDate.getHours() + ":" + currentDate.getMinutes() + ":0" + currentDate.getSeconds();
    }
}