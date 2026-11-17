"use strict";

// Урок 1. Доступ к элементам страницы.
const statusElement = document.querySelector("#appStatus");
const navigationButtons = document.querySelectorAll("[data-screen-target]");

if (statusElement !== null) {
  statusElement.textContent =
    "JavaScript подключён. Найдено элементов навигации: " +
    navigationButtons.length + ".";
}

console.log("Organizer: урок 1 — DOM доступен.");

// Урок 2. Переключение основных экранов без перезагрузки страницы.
const mainArea = document.querySelector("#appMain");
const screens = document.querySelectorAll("#appMain .screen");

function showScreen(screenId) {
  const targetScreen = document.getElementById(screenId);

  if (mainArea === null || targetScreen === null ||
      !mainArea.contains(targetScreen) || !targetScreen.classList.contains("screen")) {
    console.warn("Неизвестный экран:", screenId);
    return;
  }

  screens.forEach((screen) => {
    screen.hidden = screen !== targetScreen;
  });
}

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screenTarget);
  });
});
