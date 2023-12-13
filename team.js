let students= [
    {
        name: "Rafael Medina",
        age:23,
        city:"Madrid",
        hobby:"video games",
        favoriteFood:"Pokke",
        favoriteVideoGame:"Dota2",
        favoriteFilm:"Lord of The Rings",
        favoriteBook:"El Alquimista",
        petName:"Lucy"
    }
]
/*Print who has a pet (name petName).*/

function havePet(studentList) {
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].petName !== undefined && studentList[i].petName !== null && studentList[i].petName !== "") {
            console.log(`${studentList[i].name} have a pet called ${studentList[i].petName}.`);
        } else if (studentList[i].petName === "") {
            console.log(`${studentList[i].name} please write down the name of your pet.`);
        } else {
            console.log(`${studentList[i].name} doesn't have a pet.`);
        }
    }
}

havePet(students);