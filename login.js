const loginForm = document.querySelector(".log-InForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const mail = document.querySelector("#email").value;
    const inputPassword = document.querySelector("#InputPassword").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const validUser = users.find(user => user.email === mail && user.contraseña === inputPassword);

    if (!validUser) {
        return alert("Usuario y/o contraseña incorrectos");
    }

    // Guarda el usuario activo en el localStorage
    localStorage.setItem("activeUser", JSON.stringify(validUser));

    alert(`Bienvenido ${validUser.nombre}`);

    // Redirigir a la página principal
    window.location.href = "index.html";
});




