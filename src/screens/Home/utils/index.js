const endTime = new Date(2023, 5, 19, 21, 0).getTime();

export function timeLeft() {
  const now = new Date();

  const remainingTime = endTime - now.getTime();

  const seconds = Math.floor((remainingTime / 1000) % 60);
  const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
  const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

  if (seconds < 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  return {
    days: days <= 9 ? `0${days}` : days,
    hours: hours <= 9 ? `0${hours}` : hours,
    minutes: minutes <= 9 ? `0${minutes}` : minutes,
    seconds: seconds <= 9 ? `0${seconds}` : seconds,
  };
}
