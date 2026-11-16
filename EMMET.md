# Emmet — памятка по основным командам

**Emmet** — встроенный в VS Code инструмент для быстрого создания HTML-разметки. Вы вводите сокращение, а редактор разворачивает его в HTML-код.

## Как использовать

1. Откройте HTML-файл в VS Code.
2. Введите сокращение, например `header>h1+p`.
3. Выберите подсказку Emmet и нажмите `Enter` или разверните сокращение через `Tab` (если включён параметр `Emmet: Trigger Expansion On Tab`).
4. При необходимости выполните форматирование с помощью Prettier.

Пример:

```text
header>h1+p
```

```html
<header>
  <h1></h1>
  <p></p>
</header>
```

## Основные операторы

| Оператор | Значение | Пример |
| --- | --- | --- |
| `>` | Вложенный элемент | `div>p` |
| `+` | Соседний элемент | `h1+p` |
| `^` | Подняться на уровень выше | `div>p^footer` |
| `*` | Повторить элемент | `li*5` |
| `()` | Сгруппировать выражение | `(header>h1)+main` |
| `{}` | Вставить текст | `h1{Заголовок}` |
| `[]` | Добавить атрибуты | `input[type=text]` |
| `.` | Добавить класс | `div.card` |
| `#` | Добавить идентификатор | `section#tasks` |
| `$` | Нумерация | `li.item$*3` |

## Примеры

**Вложенность:**

```text
ul>li
```

```html
<ul>
  <li></li>
</ul>
```

**Соседние элементы:**

```text
header+main+footer
```

```html
<header></header>
<main></main>
<footer></footer>
```

**Повторение и нумерация:**

```text
ul>li.item$*3
```

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
</ul>
```

**Текст внутри элемента:**

```text
button{Сохранить}
```

```html
<button>Сохранить</button>
```

**Атрибуты и идентификатор:**

```text
input[type=text name=title required]#taskTitle
```

```html
<input type="text" name="title" required id="taskTitle" />
```

**Поднятие вверх и группировка:**

```text
(header>h1)+(main>section)+footer
```

```html
<header>
  <h1></h1>
</header>
<main>
  <section></section>
</main>
<footer></footer>
```

## HTML-формы

| Сокращение | Результат |
| --- | --- |
| `form` | Форма |
| `input:text` | Текстовое поле |
| `input:email` | Поле электронной почты |
| `input:password` | Поле пароля |
| `input:checkbox` | Флажок |
| `input:date` | Поле даты |
| `textarea` | Многострочный текст |
| `select>option*3` | Список из трёх вариантов |
| `button:submit` | Кнопка отправки |
| `label[for=taskTitle]` | Надпись, связанная с полем |

Например:

```text
form>label[for=taskTitle]{Название задачи}+input:text#taskTitle[name=title required]+button:submit{Сохранить}
```

После развёртывания и форматирования:

```html
<form>
  <label for="taskTitle">Название задачи</label>
  <input type="text" id="taskTitle" name="title" required />
  <button type="submit">Сохранить</button>
</form>
```

## Пример для приложения Organizer

```text
header+div>aside+main^footer
```

```html
<header></header>
<div>
  <aside></aside>
  <main></main>
</div>
<footer></footer>
```

Здесь `aside` и `main` вложены в общий `div`, а `footer` находится за пределами этого контейнера.

## Команды VS Code

| Действие | Команда (Windows) |
| --- | --- |
| Развернуть сокращение Emmet | `Tab` при включённой соответствующей настройке |
| Принудительно запустить развёртывание | `Emmet: Expand Abbreviation` через палитру команд |
| Открыть палитру команд | `Ctrl + Shift + P` |
| Форматировать документ | `Shift + Alt + F` |
| Сохранить файл | `Ctrl + S` |
| Настройки | `Ctrl + ,` |
| Комментировать строку | `Ctrl + /` |

## Emmet, Prettier и HTMLHint

- **Emmet** создаёт HTML-разметку из сокращения.
- **Prettier** приводит код к единым правилам оформления.
- **HTMLHint** проверяет код на ошибки и нарушения правил HTML.

Рабочий порядок: написать сокращение → развернуть Emmet → дополнить содержимое → отформатировать Prettier → проверить HTMLHint.

**Помните:** Emmet ускоряет набор кода, но не решает за разработчика, какие HTML-элементы уместны и как правильно организовать документ.
