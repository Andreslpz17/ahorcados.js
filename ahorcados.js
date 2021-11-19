String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+ character.length); } 

// palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

const diccionario = ['casa', 'pescado', 'calamar', 'jaguar' ];

const palabra = diccionario[Math.floor(Math.random()*diccionario.length)];

let palabraConGuiones = palabra.replace(/./g, "_ ");

let contadorFalla = 0

document.querySelector('#calcular').addEventListener('click', () =>{
    const letra = document.querySelector('#letra').value;

    let falla = true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);
            falla = false
       }

    }

    if(falla){
        contadorFalla++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(212*contadorFalla) + 'px 0';
        if(contadorFalla === 4){
            document.querySelector('#perdedor').style.display = 'flex';
        }}else{
            if(palabraConGuiones.indexOf('_') <0){
                document.querySelector('#ganador').style.display = 'flex';
            }
        }

    document.querySelector('#output').innerHTML = palabraConGuiones;

    document.querySelector('#letra').value = '';
    document.querySelector('#letra').focus();
});

