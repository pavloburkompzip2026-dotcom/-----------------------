const STORAGE_KEY = 'lviv_book_schedule';

function getSavedSchedule(key = STORAGE_KEY) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.warn('Помилка читання localStorage:', error);
    return [];
  }
}

function saveSchedule(scheduleArray, key = STORAGE_KEY) {
  try {
    localStorage.setItem(key, JSON.stringify(scheduleArray));
    return true;
  } catch (error) {
    console.error('Помилка запису в localStorage:', error);
    return false;
  }
}

function addToSchedule(eventObj) {
  const current = getSavedSchedule();
  current.push(eventObj);
  saveSchedule(current);
  return current;
}

function toggleScheduleItem(scheduleArray, eventId) {
  const index = scheduleArray.indexOf(eventId);
  let updated;
  let isAdded;

  if (index === -1) {
    updated = [...scheduleArray, eventId];
    isAdded = true;
  } else {
    updated = scheduleArray.filter(id => id !== eventId);
    isAdded = false;
  }

  return { updatedSchedule: updated, isAdded };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getSavedSchedule, saveSchedule, addToSchedule, toggleScheduleItem, STORAGE_KEY };
}