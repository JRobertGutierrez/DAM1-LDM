function valida_envia(){
    //Valido el nombre y apellidos
    if (document.fvalida.nombreapellidos.value.length==0){
       alert("Tiene que escribir su nombre y apellidos");
       document.fvalida.nombreapellidos.focus()
       return 0;
    } 
    //Valido la dirección
    if (document.fvalida.direccion.value.length==0){
        alert("Tiene que escribir su dirección");
        document.fvalida.direccion.focus()
        return 0;
     } 
    //Valido el correo electrónico
    if (document.fvalida.correo.value.length==0){
    alert("Tiene que escribir su correo electrónico");
    document.fvalida.correo.focus()
    return 0;
    }  
    //Valido el mensaje
    if (document.fvalida.mensaje.value.length==0){
        alert("Tiene que escribir su mensaje");
        document.fvalida.mensaje.focus()
        return 0;
        } 

    //El formulario se envia
    alert("Muchas gracias por enviar el formulario");
    document.fvalida.submit();
    } 