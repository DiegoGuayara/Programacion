// let subscribe = document.getElementById("subscribe");
// let email = document.getElementById("email");

// subscribe.addEventListener("click", email2);
// email.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     email2();
//   }
// });

// function ingemail(x) {
//   let mensajeemail = document.getElementById("mensajeemail");
//   if (mensajeemail) {
//     mensajeemail.remove();
//   }

//   const p = document.createElement("p");
//   p.id = "mensajeemail";
//   p.textContent = x;

//   document.getElementById("cont").appendChild(p);
// }

// let emails = {
//   email1:'@gmail.com',
//   email2:'@hotmail.com'
// }

// function email2() {
//   if (email.value === "" || !email.value.includes("@")) {
//     ingemail("Ingrese su email");
//   }else if(email.value.includes(emails.email1)){
//     ingemail("Ya está suscrito")
//   }
// }

$("#subscribe").click(email2);
$("#email").keydown((event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    email2();
  }
});

function ingemail(x) {
  let mensajeemail = $("#mensajeemail");

  if (mensajeemail.length) {
    mensajeemail.remove();
  }

  const p = $("<p></p>");
  p.attr('id', 'mensajeemail')
  p.text(x);

  $("#cont").append(p);
}

function email2() {
  if($('#email').val() === '' || !$('#email').val().includes('@')) {
    ingemail('Ingrese su email')
  }else if($('#email').val().includes('@gmail.com') ){
    ingemail('Ya está suscrito  ')
  }
}
