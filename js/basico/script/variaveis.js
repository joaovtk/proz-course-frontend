(() => {
    /*
    var name;
    name = "Vitor";
    var idade = 18;
    var peso = 80.5;*/
    var name = Number(window.prompt("Qual é seu nome: ") || "Não informada");
    var idade = Number(window.prompt("Qual sua idade: ") || "Não informada");
    var peso = Number(window.prompt("Qual seu peso: ") || "Não informada");
    //window.alert("Hello World"); 
    //window.alert(name);
    window.alert(`Meu nome é: ${name}`);
    window.alert("Minha idade é: " + idade);
    window.alert("Meu peso é: "+ peso)
})();