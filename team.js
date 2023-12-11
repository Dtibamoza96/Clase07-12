let students= [

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
  
  	function findFavoriteGame (game) {

		for( let i=0 ; i < students.length ; i++){

			if(students[i].favoriteVideoGame.toLowerCase() === "lol" || students[i].favoriteVideoGame.toLowerCase() === "league of legends")			{
				console.log(students[i].name);
				return;
			}
		}
		
		console.log(`No se encontro ningun estudiante que juege a ${game}`);
	}
   findFavoriteGame("League Of Legends")
  }
