var mostrar = false;
function MostrarHora(){    
    if (mostrar == false){
        document.getElementById('hora').innerHTML = Date();
        mostrar = true;
    }else{
        mostrar = false;
        document.getElementById('hora').innerHTML = "";
    }
}