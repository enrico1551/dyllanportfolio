const themeButton = document.getElementById("theme-toggle");
const storageKey = "student-portfolio-theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeButton.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
}

let savedTheme = "light";
try {
  const storedTheme = localStorage.getItem(storageKey);
  if (storedTheme === "light" || storedTheme === "dark") savedTheme = storedTheme;
} catch {}
applyTheme(savedTheme);

themeButton.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  try { localStorage.setItem(storageKey, nextTheme); } catch {}
});
