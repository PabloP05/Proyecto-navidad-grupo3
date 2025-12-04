document.addEventListener('DOMContentLoaded',()=>{
    const nombreFallo = document.getElementById('nombreFallo');
const pwFallo = document.getElementById('pwFallo');
const nombre = document.getElementById('nombre');
const pw = document.getElementById('pw');

const inicio_de_sesicon = document.getElementById('inicio_de_sesicon');

inicio_de_sesicon.addEventListener('submit',(e)=>{
    if(nombre.value.trim()==""){
        e.preventDefault();
        nombreFallo.innerText = "introduzca en nombre de administrador"
        nombre.style.border='1px solid red'
    }
})

nombre.addEventListener('input',()=>{ //    el evento input hace que escuche al type="text" del html
    nombre.style.border='1px solid green'
    nombreFallo.innerText=''
    if(nombre.value.trim()==""){
         nombre.style.border='none'
    }
});
});