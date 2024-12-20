const form = document.getElementById('login-form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value;

    if (email === "") {
        alert("Silakan masukkan Email.");
        return;
    }

    if (confirm("Apakah Anda yakin ingin login dengan email " + email + "?")) {
    
        console.log('Email:', email);

        window.location.href = "tugas besar web.html"
        alert("Login berhasil!");
    } else {
        alert("Login dibatalkan.");
    }
});