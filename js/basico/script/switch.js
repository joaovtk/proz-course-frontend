(() => {
    let op = Number(window.prompt("Informe a opção: "));
    switch (op){
        case 1:
            window.alert("Home");
            break;
        case 2:
            window.alert("Perfil");
            break;
        case 3:
            window.alert("Contato");
            break;
        default:
            window.alert("Opção inválida");
            break;
    }
})();