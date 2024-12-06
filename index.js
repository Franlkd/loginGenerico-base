// Mostrar el nombre del usuario en la página principal
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // Recupera el usuario activo del localStorage
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));

    // Verifica si existe un usuario activo y muestra el nombre
    if (activeUser && activeUser.nombre) {
        root.textContent = activeUser.nombre;
    } else {
        root.textContent = "Invitado"; // Si no hay usuario, muestra "Invitado"
    }
});

console.log(localStorage.getItem("activeUser"));