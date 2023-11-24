(() => {
    var ano = Number(window.prompt("Informe o ano: "));
    if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
        window.alert("Ano bissexto")
    }
})()