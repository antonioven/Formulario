function enviar(){
    let Unombre = document.getElementById('nombre').value;
    let Uapellido = document.getElementById('apellido').value;
    let Uemail = document.getElementById('email').value;

    if(Unombre === ''){
        alert("El campo de nombre no puede estar vacio favor de llenarlo");
    }
    if(Uapellido === ''){
        alert("El campo de apellido no puede estar vacio favor de llenarlo");
    }
    if(Uemail === ''){
        alert("El campo de email no puede estar vacio favor de llenarlo");
    } 
    if(!document.getElementById("hombre").checked && !document.getElementById("mujer").checked && !document.getElementById("nbin").checked){
        alert("Selecciona una opcion de genero por favor");
    }
    if(!document.getElementById("tyc").checked){
        alert("Favor de aceptar los terminos y condiciones para proseguir");
    }
    const object = {
        nombre: Unombre,
        apellido: Uapellido,
        email: Uemail,
    }
    console.log(object);
    
}