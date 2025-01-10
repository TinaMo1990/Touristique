/* 
Para capturar atributos: 

console.log(img.src);
console.log(img.alt);
console.log(img.title);
console.log(img.name); 
*/
var imagenes=document.querySelectorAll("#menu img");
for(var i=0;i<imagenes.length;i++){
    imagenes[i].addEventListener("click",cambiarFoto)
}
function cambiarFoto(){
    document.getElementById("img-visor").src=this.src;
    document.getElementById("descripcion-titulo").innerHTML=this.title;
    document.getElementById("descripcion-desc").innerHTML=this.name;
}
