function imagenes(cantidad){

    for(i=1; i<=cantidad;i++){
            document.write("<div class=\"col-md-4\">");
            document.write("<div class=\"card mb-4 shadow-sm\">");
            document.write("<img src=\"images/imagen"+i+".jpg\">");
            document.write("<div class=\"card-body\">");
            document.write("<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>");
            document.write("</div>");
            document.write("</div>");
            document.write("</div>");
    }
}