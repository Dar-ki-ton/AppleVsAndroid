// declaring variables
var logoImg = document.getElementById("logo");
var debate = document.getElementById("explore");
var andBtn = document.getElementById("android-btn");
var appBtn = document.getElementById("apple-btn");

// event listener
andBtn.addEventListener("click", android);

// event function
function android() {
  document.documentElement.style.backgroundColor = `#a4c93b`;
  document.body.style.fontFamily = `Roboto, sans-serif`;

  logoImg.src = `images/Android-Logo.jpg`;

  debate.innerHTML = `Android Home`;
  debate.href = `https://www.android.com/`;
  debate.style.backgroundColor = `#a4c93b`;

  andBtn.classList.add("active");
  appBtn.classList.remove("active");
}

// event listener
appBtn.addEventListener("click", apple);

// event function
function apple() {
  document.documentElement.style.backgroundColor = `#b6bcca`;
  document.body.style.backgroundColor = `Brygada 1918, serif`;

  logoImg.src = `images/Apple-Logo.jpg`;

  debate.innerHTML = `Apple Home`;
  debate.href = `https://www.apple.com/`;
  debate.style.backgroundColor = `#b6bcca`;

  appBtn.classList.add("active");
  andBtn.classList.remove("active");
}
