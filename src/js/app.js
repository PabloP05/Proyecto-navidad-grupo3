import { modeloInicio } from "./model/modeloInicio.js";
import { vistaInicio } from "./views/vistaInicio.js";
import { controladorInicio } from "./services/servicios_adrian/controladorInicio.js";

import { modeloLogin } from "./model/modeloLogin.js";
import { vistaLogin } from "./views/vistaLogin.js";
import { controladorLogin } from "./services/servicios_adrian/controladorLogin.js";

import { modeloMenuPrincipal } from "./model/modeloMenuPrincipal.js";
import { vistaMenuPrincipal } from "./views/vistaMenuPrincipal.js";
import { controladorMenuPrincipal } from "./services/servicios_adrian/controladorMenuPrincipal.js";

import { modeloRegistro } from "./model/modeloRegistro.js";
import { vistaRegistro } from "./views/vistaRegistro.js";
import { controladorRegistro } from "./services/servicios_adrian/controladorRegistro.js";

import { modeloUnirSala } from "./model/modeloUnirSala.js";
import { vistaUnirSala } from "./views/vistaUnirSala.js";
import { controladorUnirSala } from "./services/servicios_adrian/controladorUnirSala.js";

import { modeloFotos } from "./model/modeloFotos.js";
import { vistaFotos } from "./views/vistaFotos.js";
import { controladorFotos } from "./services/servicios_adrian/controladorFotos.js";

import { modeloSalas } from "./model/modeloSalas.js";
import { vistaSalas } from "./views/vistaSalas.js";
import { controladorSalas } from "./services/servicios_adrian/controladorSalas.js";

import { modeloCrearSala } from "./model/modeloCrearSala.js";
import { vistaCrearSala } from "./views/vistaCrearSala.js";
import { controladorCrearSala } from "./services/servicios_adrian/controladorCrearSala.js";

import { modeloSala } from "./model/modeloSala.js";
import { vistaSala } from "./views/vistaSala.js";
import { controladorSala } from "./services/servicios_adrian/controladorSala.js";


let page=document.body.id;
switch(page){
    case "inicioSesion":
        //Inicializo el inicio de sesión
        const objModelo=new modeloInicio();
        const objVista=new vistaInicio();
        const objControladorInicio=new controladorInicio(objModelo,objVista);
        break;
    case "login":
        //Inicializando el login
        const objModeloLogin=new modeloLogin();
        const objVistaLogin=new vistaLogin();
        const objControladorLogin=new controladorLogin(objModeloLogin,objVistaLogin);
        break;
    case "menuPrincipal":
        //Inicializando el menú principal
        const objModeloMenuPrincipal=new modeloMenuPrincipal();
        const objVistaMenuPrincipal=new vistaMenuPrincipal();
        const objControladorMenuPrincipal=new controladorMenuPrincipal(objModeloMenuPrincipal,objVistaMenuPrincipal);
        break;
    case "registro":
        //Inicializando el registro
        const objModeloRegistro=new modeloRegistro();
        const objVistaRegistro=new vistaRegistro();
        const objControladorRegistro=new controladorRegistro(objModeloRegistro,objVistaRegistro);
        break;
    case "unirSala":
        //Inicializando el unir a salas
        const objModeloUnirSala=new modeloUnirSala();
        const objVistaUnirSala=new vistaUnirSala();
        const objControladorUnirSala=new controladorUnirSala(objModeloUnirSala,objVistaUnirSala);
        break;
    case "fotos":
        //Inicializando el modo de juego fotos
        const objModeloFotos=new modeloFotos();
        const objVistaFotos=new vistaFotos();
        const objControladorFotos=new controladorFotos(objModeloFotos,objVistaFotos);
        break;
    case "salasBody":
        //Inicializando el modo de juego fotos
        const objModeloSalas=new modeloSalas();
        const objVistaSalas=new vistaSalas();
        const objControladorSalas=new controladorSalas(objModeloSalas,objVistaSalas);
        break;
    case "crear_salas":
        //Inicializando el modo de juego fotos
        const objModeloCrearSala=new modeloCrearSala();
        const objVistaCrearSala=new vistaCrearSala();
        const objControladorCrearSala=new controladorCrearSala(objModeloCrearSala,objVistaCrearSala);
        break;
    case "sala":
        //Inicializando el modo de juego fotos
        const objModeloSala=new modeloSala();
        const objVistaSala=new vistaSala();
        const objControladorSala=new controladorSala(objModeloSala,objVistaSala);
        break;
}