(() => {
    document.getElementById("user").addEventListener("click", () => {
        let username = document.getElementById("username");

        document.cookie = "username="+username.value;   
        console.log(document.cookie);
    
    });
})();   