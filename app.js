// FOOTER - CURRENT YEAR
const currentYear = new Date().getFullYear();
document.querySelector("#currentYear").textContent = currentYear;

////////////////////////////////
// COUNTER DOWN TIMER
////////////////////////////////
const countdownDate = new Date("June 26, 2025 23:59:59").getTime();
const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML =
      '<div class="countdown-breakdown-container"><div class="countdown-days"><span>Out Now</span></div></div>';
    //document.getElementById("countdown").style.display = "none";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById(
    "countdown"
  ).innerHTML = `<div class="countdown-breakdown-container">
<div class="countdown-days">
<span>${days}</span>Days</div>:<div class="countdown-hours">
<span>${hours}</span>Hours</div>:<div class="countdown-mins">
<span>${minutes}</span>Mins</div>:<div class="countdown-seconds">
<span>${seconds}</span>secs</div>
</div>`;
}, 1000);
////////////////////////////////
// COUNT DOWN TIMER ENDS
////////////////////////////////
