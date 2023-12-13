const nombres = {};
const duplicados = [];

const arrayDeMiembros = [
    { nombre: 'Juan', apellido: 'Perez', ciudad:"sevilla" , hobby:" " },
    { nombre: 'Maria', apellido: 'Lopez', ciudad:"sevilla" , hobby:" " },
    { nombre: 'Juan', apellido: 'Gomez', ciudad:"sevilla" , hobby:" " },
    { nombre: 'Pedro', apellido: 'Rodriguez', ciudad:"sevilla" , hobby:" " },
    { nombre: 'Maria', apellido: 'Garcia', ciudad:"sevilla" , hobby:" " },
];

function verDuplicados() {
    for (const miembro of arrayDeMiembros) {
        if (nombres[miembro.nombre]) {
            duplicados.push(miembro.nombre);
        } else {
            nombres[miembro.nombre] = true;
        }
    }

    return duplicados;

}
const duplicadosNombres = verDuplicados(arrayDeMiembros);

if (duplicadosNombres.length > 0) {
    console.log('Hay miembros con el mismo nombre:', duplicadosNombres.join(', '));
} else {
    console.log('No hay miembros con el mismo nombre.');
}