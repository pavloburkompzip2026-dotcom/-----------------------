function calculateCountdown(currentDateMs, targetDateMs) {
  const diff = targetDateMs - currentDateMs;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isExpired: false
  };
}

// Експорт для Jest
if (typeof module !== 'undefined') {
  module.exports = { calculateCountdown };
}