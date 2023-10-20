registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const number = document.getElementById("number").value;
    const consultorio = document.getElementById("consultorio").value;
    const email = document.getElementById("email").value;
    const special = document.getElementById("special").value;

    // Aquí puedes realizar la validación de los datos ingresados

    // Almacenar en localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("number", number);
    localStorage.setItem("consultorio", consultorio);
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
  