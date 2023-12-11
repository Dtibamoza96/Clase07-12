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
	}

	]
	
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
