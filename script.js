// Registro de usuario
const registerForm = document.querySelector(".registerForm");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#registerEmail").value;
    const contraseña = document.querySelector("#registerPassword").value;
    const nombre = document.querySelector("#registerName").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const encontrarUsuario = users.find(user => user.email === email);

    if (encontrarUsuario) {
        return alert("Usuario ya registrado");
    }

    users.push({ nombre: nombre, email: email, contraseña: contraseña });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso");

    // Redirigir al login
    window.location.href = "log-in.html";
});





