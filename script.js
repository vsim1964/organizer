"use strict";

// УРОК 1. ЗНАКОМСТВО С DOM
// Этот файл выполняется после разбора HTML благодаря атрибуту defer.
// Пока мы только находим элементы страницы и меняем текст.
// Обработка нажатий и переходы между экранами появятся на втором уроке.

// document — объект, через который JavaScript обращается к HTML-странице.
// querySelector() возвращает первый элемент, подходящий под CSS-селектор.
// Символ # перед именем означает поиск по атрибуту id.
const statusElement = document.querySelector("#appStatus");

// querySelectorAll() возвращает коллекцию всех подходящих элементов.
// В данном случае это кнопки со специальным HTML-атрибутом
// data-screen-target — в дальнейшем они будут переключать экраны.
const navigationButtons = document.querySelectorAll("[data-screen-target]");

// Если элемент найден, изменяем его текст с помощью textContent.
// Проверка нужна потому, что querySelector() может вернуть null.
if (statusElement !== null) {
  statusElement.textContent = "JavaScript подключён. Найдено элементов навигации: " + navigationButtons.length + ".";
}

// Сообщение в консоли помогает проверить запуск скрипта в инструментах разработчика.
// Для просмотра: F12 → Console (Консоль).
console.log("Organizer: урок 1 — DOM доступен.");
