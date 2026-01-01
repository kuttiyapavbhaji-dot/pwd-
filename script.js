// PASSWORD GATE
const lockscreen = document.getElementById("lockscreen");
const app = document.getElementById("app");
const pwdInput = document.getElementById("pwdInput");
const pwdBtn = document.getElementById("pwdBtn");
const pwdError = document.getElementById("pwdError");

function unlockIfValid() {
  const value = pwdInput.value.trim();
  if (value === "pwd") {
    lockscreen.style.display = "none";
    app.setAttribute("aria-hidden", "false");
  } else {
    pwdError.textContent = "Wrong password. Try again.";
    pwdInput.value = "";
    pwdInput.focus();
  }
}

pwdBtn.addEventListener("click", unlockIfValid);
pwdInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlockIfValid();
});

// FIXED NAME ASSIGNMENTS
const nameAssignments = ["parth", "parth", "aarav", "shravan", "shravan", "parth", "aarav", "shravan", "aarav", "sachit", "parth", "parth", "sachit", "parth", "parth", "shravan", "aarav"];

// BANNERS DATA
const phrases = [
  "tinder bakchodi",
  "Parth bklodi crashout",
  "meri mehendi",
  "khushi paid affection",
  "The jokes – Schrödinger's rand and all",
  "Parth bklodi crashout (2nd entry)",
  "kutta peeche pad gaya behen ki lodi",
  "Mujhe khushi dila do",
  "Tinder wala call",
  "The moment when I said ki mai ladki se baat krra hu college me to jo message bombard huye the",
  "Mai to rape wape kar deta",
  "cutoff kar dunga",
  "Me inside me outside",
  "Nancy ke thighs",
  "I-I LIKE U",
  "Deepak upsc aspirant",
  "Pearl oberoi"
];

const bannerList = document.getElementById("bannerList");

function renderBanners() {
  phrases.forEach((text, index) => {
    const wrapper = document.createElement("article");
    wrapper.className = "banner";

    const left = document.createElement("div");
    left.className = "banner-left";

    const title = document.createElement("div");
    title.className = "banner-title";
    title.textContent = text;

    const note = document.createElement("div");
    note.className = "banner-note";
    note.innerHTML = `assigned to <span class="banner-tag">@${nameAssignments[index]}</span>`;

    left.appendChild(title);
    left.appendChild(note);

    const pill = document.createElement("div");
    pill.className = "banner-pill";
    pill.textContent = "inside joke";

    wrapper.appendChild(left);
    wrapper.appendChild(pill);

    bannerList.appendChild(wrapper);
  });
}

renderBanners();
