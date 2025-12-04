document.addEventListener('DOMContentLoaded',()=>{
    const selector = document.getElementById('selectorModo');

selector.addEventListener('change',()=>{
    const valor = selector.value;
    console.log(valor);

    switch (valor) {
        case '1':
            document.getElementById('contenido').innerHTML = `
            <input type="text" name="pregunta" placeholder="introduce pregunta contenido o url " required>
            <input type="text" class="opciones" placeholder="respuesta correcta" name="respuestasCorrectas[]">
            <input type="text" class="opciones" placeholder="respuesta incorrecta" name="respuestasIncorrectas[]">
            <input type="text" class="opciones" placeholder="respuesta incorrecta" name="respuestasIncorrectas[]">
            `;
            break;
        case '2':
            document.getElementById('contenido').innerHTML = `
            <input type="text" name="pregunta" placeholder="introduce pregunta contenido o url " required>
            <input type="text" class="opciones " placeholder="Respuesta correcta" name="respuestasCorrectas[]">
            <input type="text" class="opciones " placeholder="Respuesta incorrecta" name="respuestasIncorrectas[]">
            
            <button type="button" id="agregarCorrectas"><img src="views/css/icon/iconoMas.png" alt=""> correcta</button>
            <button type="button" id="agregarIncorrectas"><img src="views/css/icon/iconoMas.png" alt=""> incorrecta</button>
            `;        
            const agregarCorrectas = document.getElementById('agregarCorrectas');
            const agregarIncorrectas = document.getElementById('agregarIncorrectas');
            
            if(agregarCorrectas){
            agregarCorrectas.addEventListener('click',()=>{
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'opciones';
                input.placeholder = 'Respuesta correcta';
                input.name = 'respuestasCorrectas[]';
                document.getElementById('contenido').appendChild(input);
            });
        }
            if(agregarIncorrectas){
            agregarIncorrectas.addEventListener('click',()=>{
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'opciones';
                input.placeholder = 'Respuesta incorrecta';
                input.name = 'respuestasIncorrectas[]';
                document.getElementById('contenido').appendChild(input);
            });
        }

            break;

        case '3':   
            document.getElementById('contenido').innerHTML = `
            <input type="text" name="pregunta" placeholder="introduce pregunta contenido o url " required>
            <input type="text" class="opciones " placeholder="Respuesta correcta" name="respuestasCorrectas[]">
            <input type="text" class="opciones " placeholder="Respuesta incorrecta" name="respuestasIncorrectas[]">
            <input type="file" name="imagen" accept="image/png, image/jpeg" required>
            
            
            `;
break;
    
        default:
            break;
    }
});
})

        


    

    