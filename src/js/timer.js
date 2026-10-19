const TIME_UNITS = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24
};

const padZero = (num) => String(num).padStart(2, '0');

function calculateCountdown(currentMs, targetMs) {
  if (!currentMs || !targetMs || currentMs >= targetMs) {
    return { days: 0, hours: '00', minutes: '00', seconds: '00', isExpired: true };
  }

  const diff = targetMs - currentMs;

  const days = Math.floor(diff / TIME_UNITS.DAY);
  const hours = Math.floor((diff % TIME_UNITS.DAY) / TIME_UNITS.HOUR);
  const minutes = Math.floor((diff % TIME_UNITS.HOUR) / TIME_UNITS.MINUTE);
  const seconds = Math.floor((diff % TIME_UNITS.MINUTE) / TIME_UNITS.SECOND);

  return {
    days: days, // Число для сумісності з тестом
    hours: padZero(hours),
    minutes: padZero(minutes),
    seconds: padZero(seconds),
    isExpired: false
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { calculateCountdown, padZero, TIME_UNITS };
}