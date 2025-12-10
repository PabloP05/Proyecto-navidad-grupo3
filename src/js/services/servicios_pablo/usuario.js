import {M_usuario} from '../../model/m_usuaro.js'

export class Usuarios{
    #modelo;

    constructor(formulario){
        this.#validar(formulario);
    }

    async #validar(formulario){
        this.#modelo = new M_usuario;
        const resultado = await this.#modelo.validar(formulario);

        console.log(resultado);

        if(resultado.status == "ok"){
            window.location.href = '../../html/juego/menuPrincipal.html'; // Redirige a la página principal
        }
        else{
            alert('Error en la validación: ');
            //window.location.href = '../../html/login.html'; // Redirige de nuevo a la página de login
        } 
    }

}