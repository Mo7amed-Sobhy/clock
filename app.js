const $day =
document.querySelector('.day')
const $time =
document.querySelector('.time')
const $midday =
document.querySelector('.midday')

const padding = (num) => {
    return String(num).padStart(2, '0');
};

setInterval(
    () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        let midday = 'AM';
        const dow = [
            'Sunday',
            'Monday',
            'Tuesday',
            'wednesday',
            'Thersday',
            'Friday',
            'saturday',
        ];

        $day.innerHTML = dow[now.getDay()];

        midday = hours >= 12 ? 'PM' : 'AM';

        if (hours >= 12) {
            hours -= 12
        }

        $time.innerHTML =
        `${padding(hours)}:${padding(minutes)}:${padding(seconds)}`;
        $midday.innerHTML = midday
    },
    1000,
);