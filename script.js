const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I LOVE YOU TOO BABE ❤️​💐​";
  gif.src = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODQ4MWNzZXd1YmV0c293bHdhN2s2cm1taXZ1N2ZpOThsdGZpM3g2NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mBGcf7ReM5FHVCSyHT/giphy.webp";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});