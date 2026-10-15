function addToSchedule(event) {
  const current = getSavedSchedule();
  current.push(event);
  localStorage.setItem('my_schedule', JSON.stringify(current));
}

function getSavedSchedule() {
  const data = localStorage.getItem('my_schedule');
  return data ? JSON.parse(data) : [];
}

// Експорт для Jest
if (typeof module !== 'undefined') {
  module.exports = { addToSchedule, getSavedSchedule };
}