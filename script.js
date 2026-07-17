// Simula una sesión de terminal Cisco IOS tipeando la presentación

const lines = [
  { text: "Router> enable", color: "#8B98B3", delay: 25 },
  { text: "Router# show version", color: "#8B98B3", delay: 25 },
  { text: "", pause: 300 },
  { text: "Gian Franco — Ingeniero de Sistemas", color: "#E6EDF3", bold: true, delay: 20 },
  { text: "Enfoque: Redes & Ciberseguridad | Explorando IA", color: "#4FD1C5", delay: 15 },
  { text: "", pause: 300 },
  { text: "Router# show certifications", color: "#8B98B3", delay: 25 },
  { text: "  [OK] Cisco — Redes (CCNA)", color: "#8B98B3", delay: 10 },
  { text: "  [OK] Cisco — Ciberseguridad", color: "#8B98B3", delay: 10 },
  { text: "  [..] Google AI Fundamentals (en curso)", color: "#F0B429", delay: 10 },
];

const terminal = document.getElementById("terminal");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

async function typeLine(lineObj) {
  const p = document.createElement("p");
  p.style.color = lineObj.color || "#E6EDF3";
  if (lineObj.bold) p.style.fontWeight = "700";
  p.style.minHeight = "1.5em";
  terminal.appendChild(p);

  if (!lineObj.text) {
    await wait(lineObj.pause || 200);
    return;
  }

  if (reduceMotion) {
    p.textContent = lineObj.text;
    return;
  }

  for (let i = 0; i <= lineObj.text.length; i++) {
    p.textContent = lineObj.text.slice(0, i);
    await wait(lineObj.delay || 20);
  }
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runTerminal() {
  for (const line of lines) {
    await typeLine(line);
  }
  // cursor parpadeante al final
  const cursor = document.createElement("p");
  cursor.className = "cursor";
  cursor.style.color = "#8B98B3";
  cursor.textContent = "Router# ";
  terminal.appendChild(cursor);
}

runTerminal();
