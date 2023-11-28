(() => {
    document.getElementById("random").addEventListener("keypress", (e) => {
        let tecla = document.getElementById("tecla");
        tecla.textContent = "Tecla pressionada: " + e.key;
    }); 
})();