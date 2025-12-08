document.addEventListener('DOMContentLoaded',()=>{
    const btnIniciarPartida = document.getElementById('btnIniciarPartida');
    const btnCrearSala = document.getElementById('btnCrearSala');
    const CreaSala = document.getElementById('CreaSala');
    const btnRanking = document.getElementById('btnRanking');
    const btnCerrarSesion = document.getElementById('btnCerrarSesion');
    const jugarInvitado = document.getElementById('jugarInvitado');


    if(btnIniciarPartida){
        btnIniciarPartida.addEventListener('click',()=>{
            window.location.href="unirSala.html";
        });
    }

    if(btnCrearSala){
        btnCrearSala.addEventListener('click',()=>{
         window.location.href="salas.html";
        });
    }

    if(CreaSala){
        CreaSala.addEventListener('click',()=>{
            window.location.href="crear-sala.html";
        });
    }

    if(btnRanking){
        btnRanking.addEventListener('click',()=>{
            window.location.href="ranking.html"
        })
    }

    if(btnCerrarSesion){
       btnCerrarSesion.addEventListener('click',()=>{
         window.location.href='inicio.html'
       })
    }

    if(jugarInvitado){
        jugarInvitado.addEventListener('click',()=>{
            window.location.href='preguntasRespuestas.html'
        });
    }
});