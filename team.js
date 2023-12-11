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
]

function imprimirStudentsOrdenAlfabetico(arrStudents){
    let aux =arrStudents;
    aux.sort(function (a,b){
        if(a.surname>b.surname){
            return 1;
        }
        return -1;
    });
    console.log(aux);


}
