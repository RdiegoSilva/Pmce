// Função para atualizar a data e hora no cabeçalho
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();

    // Data no formato dd/mm/aaaa
    const date = now.toLocaleDateString('pt-BR');

    // Hora no formato HH:MM:SS
    const time = now.toLocaleTimeString('pt-BR');

    dateElement.textContent = date;
    timeElement.textContent = time;
}

// Atualiza a data e hora a cada segundo
setInterval(updateDateTime, 1000);

// Executa imediatamente ao carregar a página
updateDateTime();


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    
    // Adiciona a classe 'show' aos cards quando a página for carregada
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('show');
        }, index * 300); // Adiciona um delay de 300ms para cada card
    });
});

// Alterna entre modo claro e escuro
const toggleTheme = document.querySelector("#themeToggle");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const currentTheme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme); // Armazenar a preferência do usuário
});

// Verifica a preferência do usuário
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
});
