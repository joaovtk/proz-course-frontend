(() => {
    /*var i = 1;
    while(i < 5){
        alert(i);
        i++;
    }*/
    /*var parada = window.confirm("Deseja continuar: ");
    while(parada){
        alert("Continuando");
    }*/
    var parada = window.prompt("Deseja continuar: ");
    while (parada.toLowerCase() == "s"){ // erro apontado pelo professor em vez de == é != 
        alert("Continuando...");
        var parada = window.prompt("Deseja continuar: ");
    }
})();