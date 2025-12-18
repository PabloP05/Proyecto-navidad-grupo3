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
            <input type="file" name="imagen" accept=".png, .jpeg, .jpg, .webp" required>
            <input type="text" class="opciones " placeholder="Respuesta correcta" name="respuestasCorrectas[]" required>
            <input type="text" class="opciones " placeholder="Respuesta incorrecta" name="respuestasIncorrectas[]" required>
            <input type="text" id="nombreArchivo" name="pregunta" readonly>
            `;

            const inputFile=document.querySelector('input[type="file"]');
            const nombreArchivo=document.getElementById('nombreArchivo');

            //Mostrar nombre del archivo cuando se selecciona
            inputFile.addEventListener('change', () => {
                nombreArchivo.value=inputFile.files[0].name;
            });

            //Validar el tipo de archivo
            document.querySelector('form').addEventListener('submit', (e) => {
                if(inputFile){
                    const file=inputFile.files[0];
                    const tiposPermitidos=['image/png', 'image/jpeg', 'image/jpg', 'image/webp'];

                    if(!tiposPermitidos.includes(file.type)){
                        e.preventDefault();
                        alert('Solo se permiten imágenes (PNG, JPEG, JPG, WEBP)');
                        inputFile.value=''; //Limpia el input
                    }
                }
            });
            break;
    
        default:
            break;
    }
});
});