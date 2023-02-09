
function cambiarcolor()
{  // creamos la funcion cambiar color.

   var validar = 0;  //iniciamos la variable "validar" en 0.
   
   let nombreusuariooo = document.getElementById("nombre-de-Usuario");   // Se crean las variables y se les asignan los elementos del HTML.
   let error_nombre = document.getElementById("Name_error");

   let correoElectronicooo = document.getElementById ("correo-electronico");
   let error_correo = document.getElementById("email_error");
   
   let password = document.getElementById("contrasena");
   let error_password = document.getElementById("contrasena_error");

   let cpassword = document.getElementById("ccontrasena");
   let error_cpassword = document.getElementById("confirmacion_error");

   if(nombreusuariooo.value.length === 0 || nombreusuariooo.value === "" || nombreusuariooo.value === null)
   {  //Creamos una instrucción if para validar si el campo está vacío. Si es así, se cambian los atributos del elemento correspondiente para mostrar el mensaje de error, y cambiar el estilo de los elementos.
       nombreusuariooo.setAttribute("class","nook"); //se cambia la clase del elemento para que adopte el estilo correspondiente
       error_nombre.textContent = "Rellene este campo";
       error_nombre.style.color = "red";
       error_nombre.style.fontSize = "small";
       error_nombre.style.backgroundColor = "transparent";
   } else 
     {
       if(nombreusuariooo.value.match(/^[A-Z]+$/i))
       {   //Si el campo está lleno, verificamos con expresiones regulares que el campo se llene con letras.
            nombreusuariooo.setAttribute("class","ok");
            error_nombre.textContent = "";
            validar++; //si el campo es correcto, sumamos 1 a la variable validar.
       } else 
         { 
            nombreusuariooo.setAttribute("class","nook");  //de lo contrario se muestra el mensaje de "no se permiten numeros".
            error_nombre.textContent = "Formato invalido. No se permiten n\u00fameros";
            error_nombre.style.color = "red";
            error_nombre.style.fontSize = "small";
            error_nombre.style.backgroundColor = "transparent";
         }
     }
   
   if(correoElectronicooo.value.length === 0 || correoElectronicooo.value === "" || correoElectronicooo.value === null)
   {  //Como en el nombre, validamos que el campo esté lleno.
       correoElectronicooo.setAttribute("class","nook");
       error_correo.textContent = "Rellene este campo";
       error_correo.style.color = "red";
       error_correo.style.fontSize = "small";
       error_correo.style.backgroundColor = "transparent";
   } else 
     {   
       if(correoElectronicooo.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) 
       {   //Si está lleno, verificamos con expresiones regulares que la cuenta de correo cuente con el formato correcto.
            correoElectronicooo.setAttribute("class","ok");      
            error_correo.textContent = "";
            validar++;
       } else 
         {   
          correoElectronicooo.setAttribute("class","nook");   //de lo contrario se muestra el mensaje de "email inválido".
            error_correo.textContent = "Email inv\u00e1lido";
            error_correo.style.color = "red";
            error_correo.style.fontSize = "small";
            error_correo.style.backgroundColor = "transparent";
         }
     }
 
   if(password.value.length === 0 || password.value === "" || password.value === null)
   {  //Como en el nombre, validamos que el campo esté lleno.
       password.setAttribute("class","nook");
       error_password.textContent = "Rellene este campo";
       error_password.style.color = "red";
       error_password.style.fontSize = "small";
       error_password.style.backgroundColor = "transparent";
   } else 
     { 
        if(password.value.length <= 8) 
        {   //Si está lleno, verificamos que la contraseña no contenga más de 8 caracteres.
            password.setAttribute("class","ok");
            error_password.textContent = "";
            validar++;  
        } else
          {
            password.setAttribute("class","nook");
            error_password.textContent = "No debe tener m\u00e1s de 8 caracteres";  //de lo contrario se muestra el mensaje de error.
            error_password.style.color = "red";
            error_password.style.fontSize = "small";
            error_password.style.backgroundColor = "transparent";  
          }
     }

   if(cpassword.value.length === 0 || cpassword.value === "" || cpassword.value === null)
   { //Como en el nombre, validamos que el campo esté lleno.
       cpassword.setAttribute("class","nook");
       error_cpassword.textContent = "Rellene este campo";
       error_cpassword.style.color = "red";
       error_cpassword.style.fontSize = "small";
       error_cpassword.style.backgroundColor = "transparent";
   } else 
     {
        if(cpassword.value === password.value) 
        {   //Si no, verificamos que las contraseñas sean identicas.
            cpassword.setAttribute("class","ok");
            error_cpassword.textContent = "";
            validar++;
        } else
          {
            cpassword.setAttribute("class","nook");
            error_cpassword.textContent = "Las contraseñas no coinciden";  //de lo contrario se muestra el mensaje de error.
            error_cpassword.style.color = "red";
            error_cpassword.style.fontSize = "small";
            error_cpassword.style.backgroundColor = "transparent";
          }
    }

   if (validar === 4)
   {
        alert ("Inscripción correcta");  // En caso de que todos los campos estén llenos correctamente, la variable validar debe tener valor 4. Si es así, emitimos una alerta con el mensaje descrito.
   }
}