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

// Уроки 2–3. Переключение экранов и состояние навигации.
const mainArea = document.querySelector("#appMain");
const screens = document.querySelectorAll("#appMain .screen");
const sidebarButtons = document.querySelectorAll(".sidebar__nav [data-screen-target]");

const parentScreens = {
  projectDetailsScreen: "projectsScreen",
  memberScreen: "teamScreen"
};

function showScreen(screenId, moveFocus = true) {
  const targetScreen = document.getElementById(screenId);

  if (mainArea === null || targetScreen === null ||
      !mainArea.contains(targetScreen) || !targetScreen.classList.contains("screen")) {
    console.warn("Неизвестный экран:", screenId);
    return;
  }

  screens.forEach((screen) => {
    screen.hidden = screen !== targetScreen;
  });

  const activeSection = parentScreens[screenId] ?? screenId;

  sidebarButtons.forEach((button) => {
    if (button.dataset.screenTarget === activeSection) {
      button.setAttribute("aria-current", "page");
    } else {
      button.removeAttribute("aria-current");
    }
  });

  if (moveFocus) {
    mainArea.focus();
  }
}

navigationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screenTarget);
  });
});

showScreen("tasksScreen", false);
