const fs = require('fs');
const path = require('path');

describe('L5 Acceptance & Post-Deploy Smoke Test (Pentagon Model)', () => {
  const liveUrl = process.env.DEPLOYED_URL;

  test('should verify production build artifact exists and is non-empty', () => {
    const distIndex = path.resolve(__dirname, '../dist/index.html');
    expect(fs.existsSync(distIndex)).toBe(true);

    const stats = fs.statSync(distIndex);
    expect(stats.size).toBeGreaterThan(5000);
  });

  test('should pass live environment availability check when deployed', async () => {
    if (!liveUrl) {
      // Локальний режим або pre-deploy перевірка
      expect(true).toBe(true);
      return;
    }

    const start = Date.now();
    const response = await fetch(liveUrl);
    const duration = Date.now() - start;

    expect(response.status).toBe(200);
    expect(duration).toBeLessThan(3000);

    const body = await response.text();
    expect(body).toContain('КНИЖКОВА КРАЇНА');
  });
});