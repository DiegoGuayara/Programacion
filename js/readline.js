let rl = require("readline").createInterface(process.stdin, process.stdout);

//Contraseñas
/*rl.question("Va a mirar las contraseñas o va a ingresar una? ", (num) => {
  let mapa = new Map();
  mapa.set(1, 44);
  mapa.set(21, 2);
  let cont;

  if (num == "Ingresar contraseña") {
    rl.question("Ingrese la contraseña ", (con) => {
      mapa.set("Contraseña nueva", con);
      console.log("La contraseña ingresada es ${con} y las existentes son:");
      for (cont of mapa) {
        console.log(cont);
      }
      rl.close();
    });
  } else if (num == "Mostrar contraseñas") {
    console.log("Las contraseñas existentes son:");
    for (cont of mapa) {
      console.log(cont);
    }
    rl.close();
  } else {
    console.log("No realizó nada");
    rl.close();
  }
});
*/

//Nombres
/*rl.question("Cuantos nombres va a ingresar. ", (x) => {
  let i = 1;
  let nom = new Map();

  function nomb() {
    if (i <= x) {
      rl.question(`Ingrese el nombre ${i}. `, (y) => {
        nom.set(`Nombre ${i}`, y);
        i++;
        nomb();
      });
    } else {
      rl.close();
      for (let noms of nom) {
        console.log(noms);
      }
    }
  }
  nomb();
});
*/

//Usuarios
/*rl.question("Quiere registrar uno o varios usuarios? ", (x) => {
  let usuarios = new Map();
  let i = 1;

  function u() {
    if (x === "Uno") {
      rl.question("Ingrese el usuario. ", (y) => {
        console.log(`Usuario registrado: ${y}`);
        rl.close();
      });
    } else if (x === "Varios") {
      rl.question(`Ingrese usuario ${i}. `, (z) => {
        if (z !== "Terminar") {
          i++;
          usuarios.set(`Usuario registrado ${i - 1}`, z);
          u();
        } else {
          rl.close();
          for (usu of usuarios) {
            console.log(usu);
          }
        }
      });
    } else {
      console.log("No realizó nada");
      rl.close();
    }
  }
  u();
});
*/

//Usuarios con contraseña
/*rl.question("Quiere ingresar uno o varios usuarios? ", (x) => {
  let usuarios = new Set();
  let i = 1;
  function u() {
    if (x === "Uno") {
      rl.question("Ingrese el usuario. ", (y) => {
        console.log(`Usuario ${y} registrado.`);
        rl.close();
      });
    } else if (x === "Varios") {
      console.log(`${i}. Ingrese usuario y contraseña, no pueden ser iguales.`);

      rl.question("Ingrese el usuario. ", (z) => {
        if (z !== "Terminar") {
          i++;
          rl.question("Ingrese la contraseña. ", (a) => {
            if (a !== "Terminar") {
              if (z !== a) {
                usuarios.add([`Usuario ${i - 1}: ${z}`, `Contraseña: ${a}`]);
                u();
              } else {
                rl.close();
                console.log(
                  "El usuario y la contraseña no pueden ser lo mismo"
                );
                console.log("Los usuarios registrados fueron:");
                for (usu of usuarios) {
                  console.log(usu);
                }
              }
            } else {
              rl.close();
              console.log("Los usuarios registrados son:");
              for (usu of usuarios) {
                console.log(usu);
              }
            }
          });
        } else {
          rl.close();
          console.log("Los usuarios registrados son:");
          for (usu of usuarios) {
            console.log(usu);
          }
        }
      });
    } else {
      console.log("No realizó nada");
      rl.close();
    }
  }
  u();
});
*/
