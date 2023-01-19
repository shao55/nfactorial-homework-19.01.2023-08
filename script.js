// Поиск элементов
// 1. Таблицу с id="age-table"
const searchTable = document.getElementById("age-table");
console.log(searchTable);
// 2. Все элементы label внутри этой таблицы (их три)
const searchLabel = searchTable.getElementsByTagName("label");
console.log(searchLabel);
// 3. Первый td в этой таблице (со словом «Age»)
const searchTd = searchTable.getElementsByTagName("td")[0];
console.log(searchTd);
// 4. Форму form с именем name="search"
const searchForm = document.querySelector("form[name='search']");
console.log(searchForm);
// 5. Первый input в этой форме
const searchInput = searchForm.getElementsByTagName("input")[0];
console.log(searchInput);
// 6. Последний input в этой форме
let searchLastInput = searchForm.querySelectorAll("input");
let searchLastInputLast = searchLastInput[searchLastInput.length - 1];
console.log(searchLastInputLast);

// Тег в комментарии
// Выведет body, т.к. сперва через innerHTML заменим все содержимое на body,
// а потом с помощью firstChild выведет этот тег т.к. он единственный