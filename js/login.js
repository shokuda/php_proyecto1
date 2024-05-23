document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        validarCampos();
    });

    document.querySelectorAll(".form-control").forEach((input) => {
        input.addEventListener("keydown", (event) => {
            if (event.key === "Tab" || event.key === "Enter") {
                event.preventDefault();
                validarCampos();
            }
        });
    });
});

const validarCampos = () => {
    resetErrorMessages();    
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    let isValid = true;

    if (!isValidEmail(email)) {
        displayErrorMessage("emailError", "El correo electrónico no es válido.");
        document.getElementById("email").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("email").classList.remove("is-invalid");
    }

    if (password.length < 8) {
        displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
        document.getElementById("password").classList.add("is-invalid");
        isValid = false;
    } else {
        document.getElementById("password").classList.remove("is-invalid");
    }

    if (isValid) {
        alert("¡Ingresaste correctamente!");
    }
};

const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};

const displayErrorMessage = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
};

const resetErrorMessages = () => {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => {
        element.innerText = "";
    });
};