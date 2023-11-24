(() => {
    var idade = Number(window.prompt("Idade: "));

    if (idade < 12){
        window.alert("Você é criança");
    }else if (idade < 18){
        window.alert("Você é um adolescente");   
    }else if(idade < 60){
        window.alert("Você é um adulto");
    }else {
        window.alert("Você é uma pessoa idosa");
    }
})()