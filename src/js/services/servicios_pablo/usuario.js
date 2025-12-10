import {M_usuario} from '../../model/m_usuaro.js'

export class Usuarios{
    #modelo;

    constructor(formulario){
        this.#modelo = new M_usuario;
        const resultado = this.#modelo.validar(formulario);

        console.log(resultado);

        if(resultado.status === "ok"){
            alert('Usuario validado correctamente');
            window.location.href = '../../html/menuPrincipal.html'; // Redirige a la página principal
        }
        else{
            alert('Error en la validación: ');
            //window.location.href = '../../html/login.html'; // Redirige de nuevo a la página de login
        } 
    }

}