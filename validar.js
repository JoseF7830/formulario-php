var nombre,apellido,direccion,telefono,correo,pass;
//exprecion regular
var exprecion=/^\w+([\.\+\-/]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

function validacion () {
	nombre=document.getElementById("nombre").value;
	apellido=document.getElementById("apellido").value;
	direccion=document.getElementById("direccion").value;
	telefono=document.getElementById("telefono").value;
	correo=document.getElementById("correo").value;
	password=document.getElementById("pass").value;
	if (nombre=="") {
		alert("El campo Nombre esta vacio");
		return false;
	}else if (apellido=="") {
		alert("El campo Apelllido esta vacio");
		return false;
	}else if (direccion=="") {
		alert("El campo Direccion esta vacio");
		return false;
	}else if (telefono=="") {
		alert("El campo Telefono esta vacio");
		return false;
	}else if (correo=="") {
		alert("El campo Correo esta vacio");
		return false;
	}else if (pass=="") {
		alert("El campo Password esta vacio");
		return false;
	}else if(nombre.length>30){
		alert("El nombre es muy largo");
		return false;
	}else if(apellido.length>30){
		alert("Los apellidos son muy largos");
		return false;
	}else	if(direccion.length>50){
		alert("La Dirección es muy larga");
		return false;
	}else if(telefono.length>50){
		alert("El numero telefonico no debe exceder ");
		return false;
	}else if (isNan(telefono)) {
		alert("El campo telefono solo puede almacenar numeros");
		return false;
	}else if(correo.length>50){
		alert("El correo es muy largo");
		return false;
	}else if(!exprecion.test(correo)){
		alert("Correo invalido");
		return false;
	}else if (pass.length>16) {
		alert("La contraseña excede el numero de caracteres");
		return false;
	}

	return true;
}