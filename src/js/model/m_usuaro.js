export class M_usuario{
    async validar(formulario){

       const dato = new FormData(formulario);

          const result = await fetch('../../../test/validar.php', {
                method: 'POST',
                body: dato
            });
               return await result.json();

            
    }
}