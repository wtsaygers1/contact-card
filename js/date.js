const timeTag = document.getElementById('time')

function getTime() {
    let date = new Date()
    let time = date.toLocaleString().split(' ')[1].slice(0, 5)
    timeTag.innerHTML = time
    setTimeout(getTime, 1000);
}
getTime();