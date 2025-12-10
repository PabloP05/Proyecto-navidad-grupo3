import { vistaInicio } from "./views/vistaInicio.js";
import { vistaLogin } from "./views/vistaLogin.js";
import { vistaMenuPrincipal } from "./views/vistaMenuPrincipal.js";
import { vistaRegistro } from "./views/vistaRegistro.js";
import { vistaUnirSala } from "./views/vistaUnirSala.js";
import { vistaFotos } from "./views/vistaFotos.js";
import { vistaSalas } from "./views/vistaSalas.js";
import { vistaCrearSala } from "./views/vistaCrearSala.js";
import { vistaSala } from "./views/vistaSala.js";
import { vistaRanking } from "./views/vistaRanking.js";
import { vistaPreguntasRespuestas } from "./views/vistaPreguntasRespuestas.js";
import { vistaSituaciones } from "./views/vistaSituaciones.js";


let page=document.body.id;
switch(page){
    case "inicioSesion":
        //Inicializo el inicio de sesión
        const objVista=new vistaInicio();
        break;
    case "login":
        //Inicializando el login
        const objVistaLogin=new vistaLogin();
        break;
    case "menuPrincipal":
        //Inicializando el menú principal
        const objVistaMenuPrincipal=new vistaMenuPrincipal();
        break;
    case "registro":
        //Inicializando el registro
        const objVistaRegistro=new vistaRegistro();
        break;
    case "unirSala":
        //Inicializando el unir a salas
        const objVistaUnirSala=new vistaUnirSala();
        break;
    case "fotos":
        //Inicializando el modo de juego fotos
        const objVistaFotos=new vistaFotos();
        break;
    case "salasBody":
        //Inicializando las salas
        const objVistaSalas=new vistaSalas();
        break;
    case "crear_salas":
        //Inicializando crear salas
        const objVistaCrearSala=new vistaCrearSala();
        break;
    case "sala":
        //Inicializando ver una sala en concreto
        const objVistaSala=new vistaSala();
        break;
    case "ranking":
        //Inicializando el ranking
        const objVistaRanking=new vistaRanking();
        break;
    case "preguntasRespuestas":
        //Inicializando el modo de juego preguntasRespuestas
        const objVistaPreguntasRespuestas=new vistaPreguntasRespuestas();
        break;
    case "situaciones":
        //Inicializando el modo de juego situaciones
        const objVistaSituaciones=new vistaSituaciones();
        break;
}