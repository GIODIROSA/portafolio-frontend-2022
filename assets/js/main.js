const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");

const toggleColors = document.getElementById("toggle-colors");
const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    // se atrapa todos los data que hay que cambiar
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;

    // console.log(section, value);
    textToChange.innerHTML = texts[section][value];
  }
};

flagsElement.addEventListener("click", (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
});

toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (toggleIcon.src.includes("moon.svg")) {
    toggleIcon.src = "assets/img/icons/sun.svg";
    toggleText.textContent = "light mode";
  } else {
    toggleIcon.src = "assets/img/icons/moon.svg";
    toggleText.textContent = "dark mode";
  }
});

toggleColors.addEventListener("click", (e) => {
  // console.log(e.target.dataset);
  rootStyles.setProperty("--primary-color", e.target.dataset.color);
});
