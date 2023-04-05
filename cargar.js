let tabla=[
    {nombre: 'pedro',apellido:'gomez',cedula:'1001254811',correo:'pedrogomez@gmail.com',telefono:'3012564785',edad:'18',fecha_de_nacimiento:'1',direccion:'calle 8'},
    {nombre: 'juan',apellido:'real',cedula:'1012236547',correo:'juanreal@gmail.com',telefono:'3689536552',edad:'23',fecha_de_nacimiento:'1',direccion:'calle 18'},
    {nombre: 'ana',apellido:'velez',cedula:'1002456852',correo:'anavelez@gmail.com',telefono:'3014257874',edad:'20',fecha_de_nacimiento:'1',direccion:'calle 20'},
  ];
  
  let cuerpotabla= document.getElementById('tabla-usuarios')
  function listar(){
    let listado="";
    for(let i=0; i< tabla.length; i++){
        listado+= `<tr><th scope="row"> ${(i+1)} </th> <td>${tabla[i].nombre} </td><td> ${tabla[i].apellido} </td>
        <td> ${tabla[i].cedula} </td><td>${tabla[i].correo} </td><td> ${tabla[i].telefono} </td>
        <td>${tabla[i].edad} </td><td>${tabla[i].fecha_de_nacimiento} </td><td>${tabla[i].direccion} </td></tr>`
    }
    cuerpotabla.innerHTML=listado
  
  }
  function nuevo(){
    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;
    let cedula= document.getElementById('cedula').value;
    let correo= document.getElementById('correo').value;
    let telefono= document.getElementById('telefono').value;
    let edad= document.getElementById('edad').value;
    let fecha_de_nacimiento= document.getElementById('fecha_de_nacimiento').value;
    let direccion= document.getElementById('direccion').value;
    if (!nombre) {
        alert('Ingrese el nombre')
        return
    }
    if (!apellido) {
        alert('Ingrese el apellido')
        return
    }
    if (!cedula) {
      alert('Ingrese la cedula')
      return
    }
    if (!correo) {
        alert('Ingrese el correo')
        return
    }
    if (!telefono) {
      alert('Ingrese el telefono')
      return
    }
    if (!edad) {
      alert('Ingrese la edad')
      return
    }
    if (!fecha_de_nacimiento) {
      alert('Ingrese la fecha de nacimiento')
      return
    }
    if (!direccion) {
      alert('Ingrese la direccion')
      return
    }
    if(!cedula) {
    cedula = tabla.getElementById(cedula)
    alert('usuario ya creado con esa cedula')
    return
    }
  
    let i=1;
    cuerpotabla.innerHTML=`<tr><th scope="row">${(i+1)}</th><td>${nombre}</td><td>${apellido}</td><td>${cedula}</td>
    <td>${correo}</td><td>${telefono}</td><td>${edad}</td><td>${fecha_de_nacimiento}</td><td>${direccion}</td></tr>`
    i+=1;
    let nuevo={nombre:nombre,apellido:apellido,cedula:cedula,correo:correo,telefono:telefono,edad:edad,
      fecha_de_nacimiento:fecha_de_nacimiento,direccion:direccion}
    tabla.push(nuevo)
  }