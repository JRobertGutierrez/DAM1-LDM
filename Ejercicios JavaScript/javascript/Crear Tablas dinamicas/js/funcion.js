function cabeceraTabla(col1,col2,col3){
    document.write("<table border=1px class='table table-striped'>");
    document.write("<tr>");
    document.write("    <th>"+col1+"</th>");
    document.write("    <th>"+col2+"</th>");
    document.write("    <th>"+col3+"</th>");
    document.write("</tr>");
}


function filasTabla(fila){

    for(i=0; i<fila;i++){

    document.write("<tr>");
    document.write("<td>xxxxxxxxxxx</td>");
    document.write("<td>xxxxxxxxxxx</td>");
    document.write("<td>xxxxxxxxxxx</td>");
    document.write("</tr>");
    }
}

function finalTabla(){
    document.write("</table>");
}