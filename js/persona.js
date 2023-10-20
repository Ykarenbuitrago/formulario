registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const number = document.getElementById("number").value;
    const edad = document.getElementById("edad").value;
    const telefono = document.getElementById("telefono").value;
    const special = document.getElementById("special").value;

    // Aquí puedes realizar la validación de los datos ingresados

    // Almacenar en localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("edad", edad);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("number", number);
    localStorage.setItem("telefono", telefono);
    localStorage.setItem("special", special);

    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'Los datos se han guardado correctamente.',
      showConfirmButton: false,
      timer: 2000
    }).then(() => {
      // Redireccionar o realizar alguna acción adicional si es necesario
    });
  });
  