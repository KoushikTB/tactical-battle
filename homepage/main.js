/* ---------- helpers ---------- */
const achPanel = document.getElementById("achPanel");
const achBtn = document.getElementById("achBtn");

function showSection(id) {
  document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* theme */
themeBtn.onclick=()=>{
  document.body.classList.toggle("light");
  themeBtn.textContent=document.body.classList.contains("light")?"🌞":"🌙";
};

/* =========================
   TUTORIAL
========================= */

const pages = [
  {
    title: "Welcome to Tactical Battle",
    text: `
      <p>Tactical Battle is a strategic card game about weapons, upgrades, and risk.</p>
      <p>You win by building powerful combos — or outsmarting everyone else.</p>
    `
  },
  {
    title: "What Is a Weapon?",
    text: `
      <p>Your weapon is the core of your build.</p>
      <p>Upgrades, crystals, and effects all attach to it.</p>
      <div class="card rare">Bow</div>
    `
  },
  {
    title: "Weapon Rarities",
    text: `
      <div class="card rare">Rare</div>
      <div class="card epic">Epic</div>
      <div class="card legendary">Legendary</div>
      <div class="card mystical">Mystical</div>
      <div class="card upgraded">Upgraded-Legendary</div>
      <div class="card secret">Secret ???</div>
    `
  },
  {
    title: "Rare Weapons",
    text: `
      <div class="card rare">Bow</div>
      <div class="card rare">Bomb</div>
      <div class="card rare">Spear</div>
    `
  },
  {
    title: "Epic Weapons",
    text: `
      <div class="card epic">Crossbow</div>
      <div class="card epic">Minigun</div>
      <div class="card epic">Nature’s Staff</div>
      <div class="card epic">Trident</div>
    `
  },
  {
    title: "Legendary & Mystical",
    text: `
      <div class="card legendary">Laser</div>
      <div class="card legendary">Kunai</div>
      <div class="card mystical">Magic Wand</div>
    `
  },
  {
    title: "Upgraded & Secret",
    text: `
      <div class="card upgraded">Silent Assassin</div>
      <div class="card upgraded">Plasma Cannon</div>
      <div class="card secret">??? (1-of-1)</div>
    `
  },
  {
    title: "Crystals",
    text: `
      <p>Crystals massively alter gameplay.</p>
      <p>Only some builds can handle their power.</p>
      <div class="card mystical">Crystal of Annihilation</div>
      <div class="card mystical">Crystal of Life</div>
      <div class="card mystical">Crystal of Torn Reality</div>
    `
  },
  {
    title: "Inventory & Limits",
    text: `
      <p>You can hold:</p>
      <ul style="text-align:left;max-width:360px;margin:auto;">
        <li>🧩 Max 5 upgrades active</li>
        <li>🎒 Max 12 cards in inventory</li>
        <li>⚠️ Some cards ignore limits</li>
      </ul>
    `
  },
  {
    title: "Turn Flow",
    text: `
      <p>On your turn, you choose ONE:</p>
      <ul style="text-align:left;max-width:360px;margin:auto;">
        <li>Draw a card</li>
        <li>Play a card</li>
        <li>Sabotage an opponent</li>
      </ul>
    `
  },
  {
    title: "Winning the Game",
    text: `
      <p>Win by:</p>
      <ul style="text-align:left;max-width:360px;margin:auto;">
        <li>Having the highest DPS</li>
        <li>Defeating opponents</li>
        <li>Outlasting everyone else</li>
      </ul>
    `
  },
  {
    title: "You’re Ready",
    text: `
      <p>You now understand the basics of Tactical Battle.</p>
      <p>Experiment. Break builds. Create chaos.</p>
      <button class="btn" onclick="showSection('menu')">Return to Menu</button>
      <button class="btn" onclick="showSection('play')">Play</button>
    `
  }
];

let i=0;
function renderTutorial(){
  tutorialTitle.textContent=pages[i].title;
  tutorialText.innerHTML=pages[i].text;
}
function nextTutorial(){ if(i<pages.length-1){i++;renderTutorial();}}
function prevTutorial(){ if(i>0){i--;renderTutorial();}}
renderTutorial();

/* =========================
   ACHIEVEMENTS
========================= */

const achievements=[
{title:"Welcome",desc:"Join the game for the first time",progress:1,goal:1,difficulty:"easy"},
{title:"Victory!",desc:"Win your first game",progress:1,goal:1,difficulty:"medium"},
{title:"Quickster",desc:"Win a game in quick-game!",progress:0,goal:1,difficulty:"medium"},
{title:"Sacrificial Sacrifice",desc:"Sacrifice antoher sacrifice card",progress:0,goal:1,difficulty:"medium"},
{title:"Secretly a Legend",desc:"Sacrifice the Secret rarity card",progress:0,goal:1,difficulty:"hard"},
{title:"Chosen Wizard",desc:"Obtain all 5 crystals and gain the huge buff!",progress:2,goal:5,difficulty:"impossible"},
{title:"Mystically worthy!",desc:"Build a loadout doing over 5m DPS",progress:3681372,goal:5000000,difficulty:"insane"},
{title:"Tactical Library",desc:"Obtain all the books in your inventory",progress:4,goal:7,difficulty:"hard"},
{title:"Happy Birthday",desc:"Make your own birthday card",progress:0,goal:1,difficulty:"easy"},
{title:"Tactical Medic",desc:"Achieve Negative damage,healing the opponent.",progress:37,goal:100,difficulty:"hard"},
{title:"Tradesman",desc:"Trade 12 times in a match.",progress:3,goal:12,difficulty:"hard"},
{title:"Sturdy Monument",desc:"Build a base having over 1t HP!",progress:82500000000,goal:1000000000000,difficulty:"insane"},
{title:"Warrior",desc:"Win a game in Every gamemode.",progress:1,goal:5,difficulty:"hard"},
{title:"Alchemist",desc:"Have all the potions in your inventory.",progress:5,goal:11,difficulty:"hard"},
{title:"Sniper",desc:"Play with the M337-ravenstrike,limited-time military weapon!",progress:0,goal:1,difficulty:"insane"},
{title:"❓❓❓",desc:"Find the secret card in the deck...",progress:1,goal:1,difficulty:"medium"},
{title:"Sharpshooter",desc:"Obtain and use all the weapons in the game.",progress:7,goal:14,difficulty:"hard"},
{title:"Lucky!",desc:"Start off with only legendaries",progress:2,goal:5,difficulty:"insane"},
{title:"Blessed!",desc:"Start off with All 5 crsytals!",progress:1,goal:5,difficulty:"impossible"},
];

function renderAchievements(){
  achPanel.innerHTML=`<h2>Achievements</h2>`;
  achievements.forEach(a=>{
    const pct=Math.min(a.progress/a.goal*100,100);
    achPanel.innerHTML+=`
    <div class="achievement">
      <span class="ach-difficulty diff-${a.difficulty}">${a.difficulty.toUpperCase()}</span>
      <h3>${a.title}</h3>
      <p>${a.desc}</p>
      <div class="ach-bar"><div class="ach-bar-fill" style="width:${pct}%"></div></div>
    </div>`;
  });
}

achBtn.onclick=()=>{
  renderAchievements();
  achPanel.classList.toggle("active");
};