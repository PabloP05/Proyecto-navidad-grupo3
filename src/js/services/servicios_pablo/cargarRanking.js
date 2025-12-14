
document.addEventListener("DOMContentLoaded", async () => {
    const data = await cargarRanking();
    renderRanking(data);
});

async function cargarRanking() {
    try {
        const response = await fetch('../../../test/cargarRanking.php');
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error al cargar el ranking:', error);
        return [];
    }
}

function renderRanking(data) {
    const main = document.querySelector("main");
    // Clear static placeholders 
    const staticPlayers = main.querySelectorAll(".jugadores");
    staticPlayers.forEach(p => p.remove());
    
    // Logic: if > 5 players, show only top 3. Else show all.
    let playersToShow = data;
    if (data.length > 5) {
        playersToShow = data.slice(0, 3);
    }

    if (playersToShow.length === 0) {
        const p = document.createElement("p");
        p.className = "jugadores";
        p.textContent = "No hay partidas registradas aún.";
        main.appendChild(p);
        return;
    }

    playersToShow.forEach((player, index) => {
        const p = document.createElement("p");
        p.className = "jugadores";
        // Format: "1. Nickname - 100 pts" 
        p.textContent = `${index + 1}. ${player.nick} - ${player.puntuacionMaxima} pts`;
        main.appendChild(p);
    });
}