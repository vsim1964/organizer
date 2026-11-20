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

// Урок 4. Открытие и закрытие диалоговых окон.
const dialogButtons = document.querySelectorAll("[data-dialog-target]");
const closeDialogButtons = document.querySelectorAll("dialog [data-close-dialog]");
const dialogForms = document.querySelectorAll("dialog form");

dialogButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.dialogTarget);

    if (dialog instanceof HTMLDialogElement && !dialog.open) {
      dialog.showModal();
    } else if (dialog === null || !(dialog instanceof HTMLDialogElement)) {
      console.warn("Неизвестное диалоговое окно:", button.dataset.dialogTarget);
    }
  });
});

closeDialogButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.closest("dialog");

    if (dialog !== null && dialog.open) {
      dialog.close();
    }
  });
});

dialogForms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.info("Сохранение данных будет добавлено на следующих этапах.");
  });
});
