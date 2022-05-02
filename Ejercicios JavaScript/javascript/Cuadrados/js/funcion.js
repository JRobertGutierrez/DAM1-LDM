function cuadrado(i){
    
    document.write("<div onclick=\"cambiarFondo('"+arrayColor[i]+"')\"class='cuadrado' style=\"background-color: "+arrayColor[i]+"\">"+arrayColor[i]);
    document.write("</div>");    
    //document.write("<h3>"+arrayTitulo[cantidad]+"</h3>");
}

function cambiarFondo(col){
    document.body.style.backgroundColor = col;
}