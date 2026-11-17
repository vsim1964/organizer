"use strict";

// Урок 1. Проверка подключения JavaScript и доступа к DOM.
const statusElement = document.querySelector("#appStatus");
const navigationButtons = document.querySelectorAll("[data-screen-target]");

if (statusElement !== null) {
  statusElement.textContent =
    "JavaScript подключён. Найдено элементов навигации: " +
    navigationButtons.length + ".";
}

console.log("Organizer: урок 1 — DOM доступен.");
