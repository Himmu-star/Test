// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.innerText = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Intro popup
window.onload = () => {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div style="
      position:fixed;top:0;left:0;width:100%;height:100%;
      background:rgba(255,255,255,0.95);display:flex;
      align-items:center;justify-content:center;flex-direction:column;
      font-family:'Segoe UI';z-index:9999;text-align:center;">
      <h1 style="color:#e91e63;">Hi Ruhi 💕</h1>
      <p style="color:#333;font-size:20px;">Rishu loves you more than words can say! 😘</p>
      <button id="closePopup" style="
        margin-top:20px;padding:10px 20px;font-size:18px;
        background:#e91e63;color:white;border:none;border-radius:10px;">
        Love You Too 💗
      </button>
    </div>`;
  document.body.appendChild(popup);
  document.getElementById("closePopup").onclick = () => {
    popup.style.display = "none";
  };
};

// Reveal hidden message
function revealLoveNote() {
  const msg = document.getElementById("loveMessage");
  msg.style.display = "block";
  msg.style.opacity = 1;
  msg.style.transition = "opacity 2s";
}