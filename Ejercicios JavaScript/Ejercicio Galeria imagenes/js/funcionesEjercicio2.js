function dibujaMarcoImagen(num, arrNombres, arrTit, arrDesc) {

	for (var i = 0; i <num; i++) {
		document.write("<div class='col-md-4'>");
	    document.write("  <div class='card mb-4 shadow-sm'>");
	    document.write("    <img src='images/"+arrNombres[i]+"'>");
	    document.write("    <div class='card-body'>");
	    document.write("      <p class='card-text'><h3>"+arrTit[i]+"</h3>"+ arrDesc[i]+".</p>");
	    document.write("    </div>");
	    document.write("  </div>");
	    document.write("</div> <!-- end class=col-md-4 -->"); 
	}
}

function dibujaMarcoImagen2(num) {

	for (var i = 0; i <num; i++) {
		document.write("<div class='col-md-4'>");
	    document.write("  <div class='card mb-4 shadow-sm'>");
	    document.write("    <img src='images/"+arrNombresImagen[i]+"'>");
	    document.write("    <div class='card-body'>");
	    document.write("      <p class='card-text'><h3>"+arrTitulos[i]+"</h3>"+ arrDescripcion[i]+".</p>");
	    document.write("    </div>");
	    document.write("  </div>");
	    document.write("</div> <!-- end class=col-md-4 -->"); 
	}
}
