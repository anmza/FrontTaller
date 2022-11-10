function ShowGeneralMessage(mensaje){

    document.querySelector("#txtMensajeGeneral").innerHTML = mensaje;
    var elem = document.querySelector('#generalMessageModal');    
    var instance = M.Modal.getInstance(elem);
    instance.open();

}