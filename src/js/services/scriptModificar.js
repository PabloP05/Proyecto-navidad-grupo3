document.addEventListener('DOMContentLoaded',()=>{
    const inputFile=document.getElementById('nuevaImagen');
    const nombreArchivo=document.getElementById('url');

    //Mostrar nombre del archivo cuando se selecciona
    inputFile.addEventListener('change', () => {
<<<<<<< HEAD
        nombreArchivo.value="assets/img/"+inputFile.files[0].name;
=======
        nombreArchivo.value="img/"+inputFile.files[0].name;
>>>>>>> ac2a106b5c56d30bb48fee4473654516ea143c7e
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