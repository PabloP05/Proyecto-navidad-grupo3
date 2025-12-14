import {M_usuario} from '../../model/m_usuaro.js'

export class Usuarios{
    #modelo;

     constructor(formulario){
        this.#modelo = new M_usuario;
        this.#validar(formulario)
    }

    async #validar(formulario){
        const resultado = await this.#modelo.validar(formulario);

        console.log(resultado);

        console.log(resultado.status)

        if(resultado.status === 'ok'){
            alert('Usuario validado correctamente');
            localStorage.setItem('idUsuario',resultado.id);
            console.log(localStorage.getItem('idUsuario'));
            window.location.href = '../../html/juego/menuPrincipal.html'; // Redirige a la página principal
        }
        else{
            alert('Error en la validación: ');
            window.location.href = '../../html/juego/login.html'; // Redirige de nuevo a la página de login
        } 
    }
}