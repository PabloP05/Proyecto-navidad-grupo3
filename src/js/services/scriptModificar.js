document.addEventListener('DOMContentLoaded',()=>{
    const inputFile=document.getElementById('nuevaImagen');
    const nombreArchivo=document.getElementById('url');

    //Mostrar nombre del archivo cuando se selecciona
    inputFile.addEventListener('change', () => {
        nombreArchivo.value="assets/img/"+inputFile.files[0].name;
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
});