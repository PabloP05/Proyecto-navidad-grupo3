export class M_usuario{
    async validar(formulario){

       const dato = new FormData(formulario);

          const result = await fetch('http://localhost:81/registroJS/test/validar.php', {
                method: 'POST',
                body: dato
            });
               return await result.json();

            
    }
}