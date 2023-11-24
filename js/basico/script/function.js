(() => {
    function soma(x, y){
        return x + y;
    }

    let x = parseFloat(window.prompt("Digite o primeiro numero: "));
    let y = parseFloat(window.prompt("Digite o segundo numero: "));

    let res = soma(x, y);

    window.alert(`A soma entre os numeros ${x} e ${y} é ${res}`);
})();