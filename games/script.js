// script one; raindrops !!!
const numRaindrops = 100;
const container = document.querySelector(".rain-container");

for (let i = 0; i < numRaindrops; i++) {
  const raindrop = document.createElement("div");
  raindrop.className = "raindrop";
  raindrop.style.left = `${Math.random() * 100}%`;
  raindrop.style.animationDuration = `${1 + Math.random()}s`;
  container.appendChild(raindrop);
}

// script two; ???
const numRaindrops = 100;
const container = document.querySelector(".rain-container");

for (let i = 0; i < numRaindrops; i++) {
  const raindrop = document.createElement("div");
  raindrop.className = "raindrop";
  raindrop.style.left = `${Math.random() * 100}%`;
  raindrop.style.animationDuration = `${1 + Math.random()}s`;
  container.appendChild(raindrop);
}
