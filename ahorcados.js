String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); } 

// palabraConGuiones = palabraConGuiones.replaceAt(i*2, letra);

const diccionario = ['casa', 'pescado', 'calamar', 'jaguar', 'mrbeast' ]

const palabra = diccionario[Math.floor(Math.random()*diccionario.length)]

const palabraConGuiones = palabra.replace(/./g, "_ ");

alert(palabra + " - " + palabraConGuiones)


document.querySelector('#calcular').addEventListener('click', () =>{
    const letra = document.querySelector('#letra').value;

    for(const i in palabra){
        if(letra == palabrea[i]){
            alert("Exito")
        }
    }
    alert(letra)
});