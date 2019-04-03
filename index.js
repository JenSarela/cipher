// Funcion para guardar nombre desde el input
const saveName = () => {
    const input = document.getElementById("user");
    nombreDeUsuario = input.value;
  
    const nombreUsuario = document.getElementById("nickName");
    nombreUsuario.innerHTML = nombreDeUsuario;
    controladorPantallas("comienzo");   
  }



 