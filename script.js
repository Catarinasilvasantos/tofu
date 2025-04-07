
const questions = [
  {
    q: "What does Marketing Cloud allow Unicre to do?",
    options: ["Send email blasts", "Build personalized journeys", "Replace CRM", "Create hardware"],
    answer: 1,
    image: "marketing.png"
  },
  {
    q: "Which Salesforce Cloud helps manage contracts and opportunities?",
    options: ["Service", "Field", "Sales", "Data"],
    answer: 2,
    image: "sales.png"
  },
  {
    q: "Which Cloud unifies customer data in real time?",
    options: ["Sales Cloud", "Marketing Cloud", "Data Cloud", "Commerce Cloud"],
    answer: 2,
    image: "data_cloud.png"
  },
  {
    q: "Field Service is useful for what scenario?",
    options: ["Managing agents", "In-store ads", "Technician visits", "None"],
    answer: 2,
    image: "field_service.png"
  },
  {
    q: "Service Cloud helps agents by...",
    options: ["Limiting tools", "Automating tasks", "Blocking users", "Slowing response"],
    answer: 1,
    image: "service.png"
  }
];

let current = 0, score = 0;
const qEl = document.getElementById("question");
const aEl = document.getElementById("answers");
const nBtn = document.getElementById("nextBtn");
const sBoard = document.getElementById("scoreBoard");
const imgEl = document.getElementById("scenarioImage");

function loadQ() {
  qEl.textContent = questions[current].q;
  aEl.innerHTML = "";
  imgEl.src = questions[current].image;
  questions[current].options.forEach((o, i) => {
    const b = document.createElement("button");
    b.textContent = o;
    b.onclick = () => checkA(i, b);
    aEl.appendChild(b);
  });
  nBtn.style.display = "none";
}

function checkA(i, b) {
  const correct = questions[current].answer;
  Array.from(aEl.children).forEach((btn, idx) => {
    btn.disabled = true;
    btn.classList.add(idx === correct ? "correct" : "incorrect");
  });
  if (i === correct) score += 10;
  nBtn.style.display = "block";
}

nBtn.onclick = () => {
  current++;
  if (current < questions.length) loadQ();
  else showScore();
};

function showScore() {
  qEl.style.display = "none";
  aEl.style.display = "none";
  nBtn.style.display = "none";
  imgEl.style.display = "none";
  sBoard.innerHTML = `<h2>Your Score: ${score}/50</h2>`;
}

loadQ();
