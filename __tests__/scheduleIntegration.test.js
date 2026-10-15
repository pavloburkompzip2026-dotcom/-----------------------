/**
 * @jest-environment jsdom
 */

const { addToSchedule, getSavedSchedule } = require('../src/js/schedule');

describe('Integration Test: Schedule Manager & localStorage Integration', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add a book event to localStorage and read it back correctly', () => {
    const mockEvent = {
      id: 'event-101',
      title: 'Презентація роману «Залишенець»',
      location: 'Книгарня Є'
    };

    addToSchedule(mockEvent);
    const savedEvents = getSavedSchedule();

    expect(savedEvents).toHaveLength(1);
    expect(savedEvents[0].id).toBe('event-101');
  });
});