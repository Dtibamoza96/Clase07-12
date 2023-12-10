let students= [
    {name: "Maria Fernanda", 
    surname: "Gomez", 
    age: 30, 
    city: "Madrid", 
    hobby: "Paint", 
    favoriteFood: "Sushi", 
    favoriteVideoGame: "WOW", 
    favoriteFilm: "Hicth", 
    favoriteBook: "The Kingkiller Chronicles", 
    petName: "Alhue"},
]
//Age Order 
students.sort(function (a, b) {
    if (a.age > b.age) {
        return 1;
        }
        if (a.age < b.age) {
        return -1;
        }
        return 0;
    });
    console.log(students);