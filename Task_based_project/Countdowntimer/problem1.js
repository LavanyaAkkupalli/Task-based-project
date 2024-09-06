document.getElementById('start-timer').addEventListener('click', function() {
    let time = parseInt(document.getElementById('time-input').value);
    const display = document.getElementById('display-time');

    const countdown = setInterval(() => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        display.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;

        if (time < 0) {
            clearInterval(countdown);
            display.textContent = "00:00";
        }
    }, 1000);
});
