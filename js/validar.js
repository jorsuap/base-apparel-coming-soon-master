function validarcorreo(correo){
    var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var valido = expReg.test(correo);
    var stilo = document.getElementById("email");
    var msjalert = document.getElementById("alert")
    if(valido==false){
        stilo.classList.add("error");
        msjalert.classList.add("active");
    }
    
}