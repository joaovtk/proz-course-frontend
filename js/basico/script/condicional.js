(() => {
    var idade = Number(window.prompt("Idade: "));
    if(idade < 18){
        window.alert("Você é menor de idade");
    }else {
        window.alert("Você é maior de idade");
    }
})();