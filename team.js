let students = [
    {
        name: "Daniel",
        surname: "Tibamoza",
        age: 27,
        city: "Vila-Real / Castellon",
        hobby: "Puzzle",
        favoriteFood: "hamburguer",
        favoriteVideoGame: "LOL",
        favoriteFilm: "Harry Potter",
        favoriteBook: "Palabras sueltas",
        petName: "Coco & Beettle",
    },
    {
        name: "Maria Fernanda",
        surname: "Gomez",
        age: 30,
        city: "Madrid",
        hobby: "Paint",
        favoriteFood: "Sushi",
        favoriteVideoGame: "WOW",
        favoriteFilm: "Hicth",
        favoriteBook: "The Kingkiller Chronicles",
        petName: "Alhue"
    },
    {
        name: "Imad",
        surname: "El Founti Chaib",
        age: 23,
        city: "Málaga",
        hobby: "Programador",
        favoriteFood: "Pinchos",
        favoriteVideoGame: "Marvel's Spiderman",
        favoriteFilm: "Imitation Game",
        favoriteBook: "El Principito",
        petName: "Lina"
    },
    {
        name: "Enrique",
        surname: "Ghijs",
        age: 26,
        city: "Santa Cruz de Tenerife",
        hobby: "Reading",
        favoriteFood: "Riramisu",
        favoriteVideoGame: "Age of Empires",
        favoriteFilm: "The Lord of the Rings Trilogy",
        favoriteBook: "Dostoyevski's The Idiot",
        petName: "Samsagáz"
    }
];

function getPetNameIfAny() {
    for (let i = 0; i > students.length; i++) {
        return students[i].petName;
    };
};

getPetNameIfAny();

console.log(students[3].petName)