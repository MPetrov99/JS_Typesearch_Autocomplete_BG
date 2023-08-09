//Масив с български градове
let names = [
    "Ахтопол",
    "Асеновград",
    "Антоново",
    "Айтос",
    "Белоградчик",
    "Батак",
    "Банско",
    "Балчик",
    "Враца",
    "Видин",
    "Велико Търново",
    "Варна",
    "Горна Оряховица",
    "Главиница",
    "Генерал Тошево",
    "Габрово",
    "Дупница",
    "Димитровград",
    "Добрич",
    "Дебелец",
    "Етрополе",
    "Елхово",
    "Елин Пелин",
    "Елена",
    "Земен",
    "Завет",
    "Златица",
    "Златоград",
    "Ивайловград",
    "Ихтиман",
    "Исперих",
    "Игнатиево",
    "Козлодуй",
    "Кюстендил",
    "Кърджали",
    "Лом",
    "Лясковец",
    "Левски",
    "Ловеч",
    "Мездра",
    "Малко Търново",
    "Мизия",
    "Монтана",
    "Неделино",
    "Никопол",
    "Нови Искър",
    "Несебър",
    "Оряхово",
    "Опака",
    "Омуртаг",
    "Обзор",
    "Пловдив",
    "Плевен",
    "Перник",
    "Пазарджик",
    "Раковски",
    "Русе",
    "Радомир",
    "Разград",
    "Смолян",
    "Сливен",
    "Силистра",
    "Стара Загора",
    "София",
    "Твърдица",
    "Тервел",
    "Тетевен",
    "Търговище",
    "Харманли",
    "Хисаря",
    "Хасково",
    "Чипровци",
    "Червен бряг",
    "Царево",
    "Черноморец",
    "Чирпан",
    "Шабла",
    "Ямбол",
    "Шумен",
];
//Сортиране на имената на градове по азбучен ред
let sortedNames = names.sort();

let input = document.getElementById("input");

//Функционалност за засичане на натискане на клавиш
input.addEventListener("keyup", (e) => {
    removeElements();
    //Loop-ване през масива
    for(let i of sortedNames) {
        //Конвертиране на написаното в string с малка буква и го сравнява с другите
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !="") {
            //Създаване на list item елемента и добавяне на клас
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayNames('" + i + "')");

            //Display-ване на написаната част от някое име, която съвпада с част от име на град от масива, в потъмнен цвят
            let word = "<b>" + i.substring(0, input.value.length) + "</b>";
            word+= i.substring(input.value.length)

            //Display-ване на match-натите от масива имена на градове
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

//Функционалност за display-ване на имената на градовете
function displayNames(value) {
    input.value = value;
    removeElements();
}

//Функционалност за изтриване на предложение от листът излизащ под търсачката
function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove()
    })
}