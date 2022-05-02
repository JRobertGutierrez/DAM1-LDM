function imagenes(cantidad, arrayNombresImagen, arrayTitulo, arrayDescripcion ){

    for(i=0; i<=cantidad -1;i++){
            document.write("<div class=\"col-md-4\">");
            document.write("    <div class=\"card mb-4 shadow-sm\">");
            document.write("        <img src ='images/"+arrayNombresImagen[i]+"'>");
            document.write("            <div class=\"card-body\">");
            document.write("            <p class=\"card-text\"><h3>"+arrayTitulo[i]+"</h3>"+arrayDescripcion[i]+"</p>");
            document.write("        </div>");
            document.write("    </div>");
            document.write("</div>");
    }
}
