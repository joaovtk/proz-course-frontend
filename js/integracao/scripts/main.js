(() => {
    // localizando e adicionando um evento ao botão
    let helloButton = document.getElementById("hello");
    let input = document.getElementById("nome");

    // Pegando texto do formulario
    helloButton.addEventListener("click", () => {
        let nome = input.value;
        if(nome){
            alert(`O seu nome é ${nome}`);
        }else{
            alert("Nome não informado");
        }
    });
})();