export function CalculateTimeLeft(deadline) {
    let difference = deadline - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return timeLeft;
}

export function CheckIfBannerIsUp(timeLeft, format) {

    if (Object.keys(timeLeft).length > 0) {
        if (format)
            return `In ${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`
        else return `In ${timeLeft.days} days ${timeLeft.hours} hours ${timeLeft.minutes} minutes ${timeLeft.seconds} ${timeLeft.seconds !== 1 ? "seconds" : "second"}`;
    }
    else return `Banner is up!`
}
