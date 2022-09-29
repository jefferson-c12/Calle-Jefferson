let contador =  1;
let articulo;
let eliminar = document.getElementById ("eliminar");
let precio = document.getElementById ("precio");
let valorPrecio = precio.innerHTML;
let texto = document.getElementById ("texto");
let textoTitulo = texto.innerHTML; 
let img = document.getElementById ("img").getAttribute ("src");

class Compra {
    constructor(img,textoTitulo,valorPrecio, contador){
        this.img = img;
        this.precio = valorPrecio;
        this.tit = textoTitulo;
        this.contador = contador;
    }
    precioFinal(){
        return this.precio * this.contador
    }
}

// utilizamos el contador de la entrega anterior
const valor = document.querySelector("#contador"); 
const botones = document.querySelectorAll(".boton")
let numero = valor.innerHTML
console.log(numero);
botones.forEach (boton => {

boton.addEventListener ("click", function(e) {

const estilos = e.currentTarget.classList;

if(estilos.contains("disminuir")&&contador > 1) {
contador--;
}
else if(estilos.contains("aumentar")) {
contador++;
}
else {

contador= 1;
}
valor.textContent = contador;

articulo = new Compra(img, textoTitulo, valorPrecio, contador)
console.log(articulo);
console.log(articulo.precioFinal());
// aca es donde se guarda en el localStorage
JSON.stringify(localStorage.setItem("PrecioFinal", articulo.precioFinal()));
}) 
})
console.log(articulo);
//  aca es donde eliminamos el localStorage
eliminar.addEventListener ("click", function(e){
    localStorage.clear()
})



//
console.log(contador);
console.log(img);
console.log(valorPrecio);
console.log(textoTitulo);
console.log(eliminar);