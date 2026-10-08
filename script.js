const checklist = [
  'Drinking water', 'First aid supplies', 'Torch', 'Spare batteries',
  'Important documents', 'Basic medicines', 'Emergency contact information',
  'Power bank', 'Non-perishable food'
];

const disasters = [{
    name: 'Flood',
    icon: '≈',
    before: ['Know safer, higher places and evacuation routes.', 'Keep documents and essentials in a waterproof bag.', 'Follow local rainfall and flood guidance.'],
    during: ['Move to higher ground when told or when water rises.', 'Avoid walking or driving through floodwater.', 'Keep away from electrical wires and flooded electrical equipment.'],
    after: ['Return only when authorities say it is safe.', 'Avoid floodwater and damaged buildings.', 'Use safe water and follow local health advice.'],
    avoid: ['Do not cross moving water or touch wet electrical equipment.']
  },
  {
    name: 'Earthquake',
    icon: '⌁',
    before: ['Keep emergency supplies ready.', 'Know safe areas inside your building.', 'Keep important contacts accessible.'],
    during: ['Drop, Cover, and Hold On.', 'Stay away from windows.', 'Do not use lifts.'],
    after: ['Check for injuries and get help if needed.', 'Move away from damaged structures.', 'Follow official instructions and expect aftershocks.'],
    avoid: ['Do not rush outside while shaking or enter visibly damaged buildings.']
  },
  {
    name: 'Fire',
    icon: '♨',
    before: ['Know two ways out and a meeting place.', 'Keep exits clear and learn how to raise an alarm.', 'Store matches and lighters safely.'],
    during: ['Raise the alarm and leave by the nearest safe exit.', 'Use stairs, not lifts.', 'If there is smoke, stay low while moving to an exit.'],
    after: ['Call for help and stay outside.', 'Tell responders if anyone may still be inside.', 'Follow instructions before returning.'],
    avoid: ['Do not re-enter a burning building or stop to collect belongings.']
  },
  {
    name: 'Cyclone',
    icon: '◉',
    before: ['Follow official forecasts and evacuation advice.', 'Secure loose outdoor objects if it is safe.', 'Keep essentials, water, and a charged phone ready.'],
    during: ['Evacuate when authorities instruct you to.', 'If sheltering, stay indoors away from windows.', 'Keep listening for official updates.'],
    after: ['Wait for the all-clear before going outside.', 'Avoid fallen wires, damaged buildings, and floodwater.', 'Report urgent hazards to local authorities.'],
    avoid: ['Do not go outdoors during a lull or ignore evacuation instructions.']
  },
  {
    name: 'Heatwave',
    icon: '☼',
    before: ['Plan activities for cooler parts of the day.', 'Keep drinking water available.', 'Check on children, older people, and anyone who may need help.'],
    during: ['Stay in shade or a cool indoor place when possible.', 'Drink water regularly and limit strenuous activity in heat.', 'If someone feels unwell, move them to a cooler place and seek medical help.'],
    after: ['Rest and continue to keep cool and hydrated.', 'Seek medical advice if symptoms continue or worsen.', 'Check on people who may be at greater risk.'],
    avoid: ['Do not leave children or pets in a parked vehicle.']
  },
  {
    name: 'Landslide',
    icon: '⌁',
    before: ['Know local warning signs and safer routes.', 'Follow official rainfall and slope warnings.', 'Keep a small emergency bag ready.'],
    during: ['Move away from the path of moving soil or rocks.', 'Follow evacuation instructions without delay.', 'If escape is not possible, seek guidance from emergency services.'],
    after: ['Stay away from the slide area and unstable slopes.', 'Watch for further movement and follow official updates.', 'Report damaged roads or hazards to local authorities.'],
    avoid: ['Do not cross a landslide area or return before it is declared safe.']
  }
];

const quiz = [{
    q: 'What should you do when an earthquake begins indoors?',
    options: ['Run to the lift', 'Drop, Cover, and Hold On', 'Stand beside a window'],
    answer: 1,
    why: 'Protect yourself under sturdy cover and stay away from windows while the shaking continues.'
  },
  {
    q: 'Which is a useful item for an emergency kit?',
    options: ['A torch with spare batteries', 'Decorative candles only', 'An unplugged appliance'],
    answer: 0,
    why: 'A working torch and spare batteries provide a safer light source during a power cut.'
  },
  {
    q: 'What should you do if a fire blocks your usual exit?',
    options: ['Use the lift', 'Look for another safe exit and raise the alarm', 'Hide in a cupboard'],
    answer: 1,
    why: 'Use another safe exit, raise the alarm, and call emergency services once safe.'
  },
  {
    q: 'What is the safer choice around floodwater?',
    options: ['Walk through if it looks shallow', 'Drive through slowly', 'Stay out and find another route'],
    answer: 2,
    why: 'Floodwater can hide hazards and may move strongly. Do not walk or drive through it.'
  },
  {
    q: 'When should you return to an evacuated area?',
    options: ['When the weather looks calm', 'When authorities say it is safe', 'As soon as the power returns'],
    answer: 1,
    why: 'Wait for official clearance because hazards may remain after an event.'
  },
  {
    q: 'What is a good way to prepare important documents?',
    options: ['Keep protected copies together', 'Leave them beside an open window', 'Put them loose in a vehicle'],
    answer: 0,
    why: 'Protected copies in a waterproof pouch are easier to carry and less likely to be damaged.'
  },
  {
    q: 'During a cyclone, what should you do if told to evacuate?',
    options: ['Wait until winds become stronger', 'Follow the evacuation instructions', 'Go to the coast to watch'],
    answer: 1,
    why: 'Follow local evacuation instructions promptly and use the route authorities advise.'
  },
  {
    q: 'What should you do during a heatwave?',
    options: ['Avoid water', 'Stay cool and drink water regularly', 'Do strenuous outdoor work at midday'],
    answer: 1,
    why: 'Keeping cool, drinking water, and limiting strenuous activity in heat can help reduce heat risk.'
  },
  {
    q: 'After an earthquake, what should you do near a damaged building?',
    options: ['Go inside to collect belongings', 'Move away and follow official advice', 'Use the lift to check each floor'],
    answer: 1,
    why: 'Damaged structures can be unsafe. Keep away and follow instructions from authorities.'
  },
  {
    q: 'What is the emergency response number in India listed on this page?',
    options: ['112', '999', '911'],
    answer: 0,
    why: '112 is the pan-India emergency response number in India.'
  }
];

const challenges = [{
    situation: 'You are inside a building when an earthquake begins. What first?',
    choices: ['Drop, Cover, and Hold On', 'Run for the lift'],
    answer: 0,
    why: 'Protect yourself in place, away from windows. Do not use lifts during shaking.'
  },
  {
    situation: 'Water is flowing across the road on your route home.',
    choices: ['Walk through carefully', 'Stay out of the water and find safety'],
    answer: 1,
    why: 'Floodwater can be deeper or faster than it appears. Do not cross it.'
  },
  {
    situation: 'You notice smoke in a building. What should you do?',
    choices: ['Raise the alarm and leave by a safe exit', 'Use the lift to get downstairs'],
    answer: 0,
    why: 'Raise the alarm, use stairs, and leave by a safe route.'
  },
  {
    situation: 'Officials ask your neighbourhood to evacuate for a cyclone.',
    choices: ['Follow the evacuation advice', 'Stay to watch the weather'],
    answer: 0,
    why: 'Local authorities can assess hazards and advise safer routes and shelters.'
  },
  {
    situation: 'A friend feels unwell while working outdoors in extreme heat.',
    choices: ['Move them to a cooler place and seek help', 'Ask them to keep working'],
    answer: 0,
    why: 'Move them out of the heat and seek medical help if they feel unwell.'
  }
];

const checklistKey = 'disaster-ready-checklist';
const quizScoreKey = 'disaster-ready-best-score';
const checklistHost = document.querySelector('#checklist-items');
let savedChecklist = {};
try {
  savedChecklist = JSON.parse(localStorage.getItem(checklistKey) || '{}');
} catch (error) {
  savedChecklist = {};
}

checklistHost.innerHTML = checklist.map((item, index) => `
  <label class="check-item"><input type="checkbox" data-check="${index}" ${savedChecklist[index] ? 'checked' : ''}><span>${item}</span></label>
`).join('');

function updateProgress() {
  const ready = checklistHost.querySelectorAll('input:checked').length;
  const percent = Math.round((ready / checklist.length) * 100);
  document.querySelector('#check-progress-text').textContent = `${ready} / ${checklist.length}`;
  document.querySelector('#hero-progress-text').textContent = `${ready} of ${checklist.length}`;
  document.querySelector('#hero-progress-bar').style.width = `${percent}%`;
  document.querySelector('#quick-check-status').textContent = `Checklist status: ${ready} of ${checklist.length} items ready.`;
}

checklistHost.addEventListener('change', () => {
  const completed = {};
  checklistHost.querySelectorAll('input').forEach((input) => {
    if (input.checked) completed[input.dataset.check] = true;
  });
  try {
    localStorage.setItem(checklistKey, JSON.stringify(completed));
  } catch (error) {

  }
  updateProgress();
});
updateProgress();

const disasterGrid = document.querySelector('#disaster-grid');
const disasterDetail = document.querySelector('#disaster-detail');
let selectedDisaster = disasters[0].name;

disasterGrid.innerHTML = disasters.map((item) => `
  <button class="disaster-card" type="button" data-disaster="${item.name}" aria-pressed="false"><span class="disaster-symbol" aria-hidden="true">${item.icon}</span><strong>${item.name}</strong></button>
`).join('');

function showDisaster(name) {
  const item = disasters.find((disaster) => disaster.name === name);
  if (!item) return;
  selectedDisaster = name;
  disasterGrid.querySelectorAll('.disaster-card').forEach((card) => {
    card.setAttribute('aria-pressed', String(card.dataset.disaster === name));
  });
  disasterDetail.innerHTML = `
    <div class="detail-heading"><h3>${item.icon} &nbsp; ${item.name}</h3><span>General preparedness guidance</span></div>
    <div class="guidance-grid">
      ${[['Before', item.before], ['During', item.during], ['After', item.after], ['Important things to avoid', item.avoid]].map(([title, points]) => `<div class="guidance-block"><h4>${title}</h4><ul>${points.map((point) => `<li>${point}</li>`).join('')}</ul></div>`).join('')}
    </div>`;
}

showDisaster(selectedDisaster);
disasterGrid.addEventListener('click', (event) => {
  const card = event.target.closest('[data-disaster]');
  if (card) showDisaster(card.dataset.disaster);
});

document.querySelector('#disaster-search').addEventListener('input', (event) => {
  const search = event.target.value.trim().toLowerCase();
  let visibleCount = 0;
  disasterGrid.querySelectorAll('.disaster-card').forEach((card) => {
    const visible = card.dataset.disaster.toLowerCase().includes(search);
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });
  document.querySelector('#search-empty').hidden = visibleCount !== 0;
  disasterDetail.hidden = visibleCount === 0;
  const selectedVisible = disasters.some((item) => item.name === selectedDisaster && item.name.toLowerCase().includes(search));
  if (!selectedVisible && visibleCount) {
    const nextCard = disasterGrid.querySelector('.disaster-card:not([hidden])');
    showDisaster(nextCard.dataset.disaster);
  }
});

const quizHost = document.querySelector('#quiz-questions');
quizHost.innerHTML = quiz.map((item, questionIndex) => `
  <fieldset class="quiz-question"><legend><h3>${questionIndex + 1}. ${item.q}</h3></legend>
    <div class="quiz-options">${item.options.map((option, optionIndex) => `<label class="quiz-option"><input type="radio" name="question-${questionIndex}" value="${optionIndex}" required><span>${option}</span></label>`).join('')}</div>
  </fieldset>
`).join('');

function readBestScore() {
  try {
    const storedScore = localStorage.getItem(quizScoreKey);
    if (storedScore === null) return null;
    const score = Number(storedScore);
    return Number.isFinite(score) ? score : null;
  } catch (error) {
    return null;
  }
}

const bestScore = readBestScore();
if (bestScore !== null) {
  document.querySelector('#best-score').textContent = `Best score: ${bestScore} / ${quiz.length}`;
}

document.querySelector('#quiz-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const answers = quiz.map((_, index) => Number(formData.get(`question-${index}`)));
  if (answers.some((answer) => Number.isNaN(answer))) return;
  const score = answers.reduce((total, answer, index) => total + Number(answer === quiz[index].answer), 0);
  const previousBest = readBestScore() ?? 0;
  const newBest = Math.max(previousBest, score);
  try {
    localStorage.setItem(quizScoreKey, String(newBest));
  } catch (error) {
    
  }
  document.querySelector('#best-score').textContent = `Best score: ${newBest} / ${quiz.length}`;
  const result = document.querySelector('#quiz-result');
  result.innerHTML = `<h3>You scored ${score} out of ${quiz.length}</h3><p>Review each answer and its explanation below.</p>${quiz.map((item, index) => {
    const correct = answers[index] === item.answer;
    return `<div class="quiz-feedback"><strong>${index + 1}. ${correct ? 'Correct' : 'Not quite'}: ${item.options[item.answer]}</strong><span>Your answer: ${item.options[answers[index]]}</span><p>${item.why}</p></div>`;
  }).join('')}`;
  result.hidden = false;
});

const challengeHost = document.querySelector('#challenge-list');
challengeHost.innerHTML = challenges.map((item, index) => `
  <article class="challenge-card" data-challenge="${index}"><span class="challenge-number">SITUATION 0${index + 1}</span><h3>${item.situation}</h3>
    <div class="challenge-choices">${item.choices.map((choice, choiceIndex) => `<button class="challenge-choice" type="button" data-choice="${choiceIndex}" aria-pressed="false">${choice}</button>`).join('')}</div>
    <p class="challenge-feedback" aria-live="polite">Choose an action to see why.</p>
  </article>
`).join('');

challengeHost.addEventListener('click', (event) => {
  const button = event.target.closest('.challenge-choice');
  if (!button) return;
  const card = button.closest('[data-challenge]');
  const item = challenges[Number(card.dataset.challenge)];
  const correct = Number(button.dataset.choice) === item.answer;
  card.querySelectorAll('.challenge-choice').forEach((choice) => {
    choice.setAttribute('aria-pressed', String(choice === button));
  });
  card.querySelector('.challenge-feedback').innerHTML = `<strong>${correct ? 'Good choice.' : 'Try to remember the safer action.'}</strong> ${item.why}`;
});

const quickOverlay = document.querySelector('#quick-overlay');
let previousFocus = null;

function closeQuickHelp() {
  quickOverlay.hidden = true;
  document.body.style.overflow = '';
  if (previousFocus) previousFocus.focus();
}

function openQuickHelp() {
  previousFocus = document.activeElement;
  quickOverlay.hidden = false;
  document.body.style.overflow = 'hidden';
  document.querySelector('#quick-close').focus();
}

document.querySelector('#quick-help').addEventListener('click', openQuickHelp);
document.querySelector('#quick-close').addEventListener('click', closeQuickHelp);
document.querySelector('#quick-return').addEventListener('click', closeQuickHelp);
document.querySelector('#quick-check-link').addEventListener('click', closeQuickHelp);
quickOverlay.addEventListener('click', (event) => {
  if (event.target === quickOverlay) closeQuickHelp();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !quickOverlay.hidden) closeQuickHelp();
});
