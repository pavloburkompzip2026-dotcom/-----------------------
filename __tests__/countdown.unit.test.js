const { calculateCountdown } = require('../src/js/timer');

describe('Unit Test: Timer Calculation Logic', () => {
  test('should correctly calculate remaining time', () => {
    const mockCurrentDate = new Date('2026-09-18T00:00:00Z').getTime();
    const targetDate = new Date('2027-09-18T00:00:00Z').getTime();

    const result = calculateCountdown(mockCurrentDate, targetDate);

    expect(result.days).toBeGreaterThanOrEqual(365);
    expect(result.isExpired).toBe(false);
  });
});