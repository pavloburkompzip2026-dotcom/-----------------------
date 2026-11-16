const fs = require('fs');
const path = require('path');

describe('L3 System Test (Pentagon Model): Build & Component Contract', () => {
  const htmlPath = path.resolve(__dirname, '../index.html');
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  test('should contain all required modular script imports', () => {
    expect(htmlContent).toContain('src="src/js/timer.js"');
    expect(htmlContent).toContain('src="src/js/schedule.js"');
  });

  test('should contain critical UI containers for map, timer, and schedule', () => {
    expect(htmlContent).toContain('id="map"');
    expect(htmlContent).toContain('id="eventsGrid"');
    expect(htmlContent).toContain('id="scheduleDrawer"');
    expect(htmlContent).toContain('id="timerDays"');
    expect(htmlContent).toContain('id="addEventModal"');
  });

  test('should verify valid module exports across all JS modules', () => {
    const timerModule = require('../src/js/timer.js');
    const scheduleModule = require('../src/js/schedule.js');

    expect(typeof timerModule.calculateCountdown).toBe('function');
    expect(typeof scheduleModule.getSavedSchedule).toBe('function');
    expect(typeof scheduleModule.toggleScheduleItem).toBe('function');
  });
});