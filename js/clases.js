/*class Mat {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  get suma() {
    return this.calcSuma();
  }
  calcSuma() {
    return this.a + this.b;
  }
}
const v = new Mat(10, 10);
console.log(v.suma);
*/

/*class Persona {
  constructor(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this._telefono = telefono;
  }

  get telefono() {
    return this._telefono;
  }

  set telefono(telefono) {
    return this._telefono.push(telefono);
  }
}

let per1 = new Persona(
  "Ordogen",
  "Arcila",
  [3235251372, 3002494243, 3113553034]
);

per1.telefono.push(3138436917);
console.log(per1);
*/

/*class Celulares {
  constructor(
    color,
    peso,
    resolucionDePantalla,
    resolucionDeCamara,
    memoriaRAM
  ) {
    this._color = color;
    this._peso = peso;
    this._resolucionDePantalla = resolucionDePantalla;
    this._resolucionDeCamara = resolucionDeCamara;
    this._memoriaRAM = memoriaRAM;
  }

  prender() {
    return "Prender celular";
  }

  apagar() {
    return "Apagar celular";
  }

  foto() {
    return "Tomar foto";
  }

  grabar() {
    return "Grabar video";
  }
}

class altaGama extends Celulares {
  constructor(
    color,
    peso,
    resolucionDePantalla,
    resolucionDeCamara,
    memoriaRAM,
    camaraSuperLenta,
    reconocimientoFacial,
    camaraExtra
  ) {
    super(color, peso, resolucionDePantalla, resolucionDeCamara, memoriaRAM);
    this._camaraSuperLenta = camaraSuperLenta;
    this._reconocimientoFacial = reconocimientoFacial;
    this._camaraExtra = camaraExtra;
  }
}

let cel1 = new altaGama("Rojo", 123, 123, 123, 123, 123, 123, 123);
let cel2 = new altaGama("Negro", 456, 456, 456, 456, 456, 456, 456);
let cel3 = new Celulares("Blanco", 789, 789, 789, 789);

console.log(cel1, cel2, cel3);
*/

/*class Aplicaciones {
  constructor(numDescargas, puntuacion, pesoJuego) {
    this._numDescargas = numDescargas;
    this._puntuacion = puntuacion;
    this.pesoJuego = pesoJuego;
  }

  instalar() {
    return "Instaló la aplicación";
  }

  abrir() {
    return "Abrió la aplicación";
  }

  cerrar() {
    return "Cerró la aplicación";
  }

  desinstalar() {
    return "Desinstaló la aplicación";
  }
}

let juego1 = new Aplicaciones(10, 123, "30mb");
let juego2 = new Aplicaciones(12, 456, "29mb");
let juego3 = new Aplicaciones(15, 1245, "24mb");
let juego4 = new Aplicaciones(11, 1456, "31mb");
let juego5 = new Aplicaciones(17, 23456, "28mb");
let juego6 = new Aplicaciones(16, 5672, "27mb");
let juego7 = new Aplicaciones(27, 3112, "37mb");

console.log(juego1, juego1.instalar());
*/

/*class Libreria {
  constructor(titulo, autores, genero, añoPublicacion) {
    this._titulo = titulo;
    this._autores = autores;
    this._genero = genero;
    this._añoPublicacion = añoPublicacion;
  }
  buscarLibro() {
    return this._titulo;
  }
}

let lib1 = new Libreria("Pinocho", "no se", "cuento", 1993);

console.log(lib1);
*/

/*class Stock {
  constructor(lacteos, panaderia, frutas) {
    this._lacteos = lacteos;
    this._panaderia = panaderia;
    this._frutas = frutas;
  }

  get frutas() {
    return this._frutas;
  }
  get pan() {
    return this._panaderia;
  }
  get lac() {
    return this._lacteos;
  }

  set frutas(frutas) {
    return (this._frutas = [...this._frutas, frutas]);
  }
  set pan(pan) {
    return (this._panaderia = [...this._panaderia, pan]);
  }
  set lac(lac) {
    return (this._lacteos = [...this._lacteos, lac]);
  }
}

class Cantidad extends Stock {
  constructor(lacteos, can1, panaderia, can2, frutas, can3) {
    super(lacteos, panaderia, frutas);
    this._can1 = can1;
    this._can2 = can2;
    this._can3 = can3;
  }

  canfru() {
    return `Productos: ${this._frutas} 
Cantidad: ${this._can3}`;
  }
  canpan() {
    return `Productos: ${this._panaderia}
Cantidad: ${this._can2}`;
  }
  canlac() {
    return `Productos: ${this._lacteos}
Cantidad: ${this._can1}`;
  }

  get can1() {
    return this._can1;
  }
  get can2() {
    return this._can2;
  }
  get can3() {
    return this._can3;
  }

  set actcanlac(can1) {
    return (this._can1 = can1);
  }
  set actcanpan(can2) {
    return (this._can2 = can2);
  }
  set actcanfru(can3) {
    return (this._can3 = can3);
  }
}

let l = new Cantidad(["Leche"], 12, ["Pan"], 43, ["Manzana"], 41);
l.actcanfru = 4;
l.frutas = "Pera";
l.lac = "Queso";
l.pan = "Buñuelo";

console.log(l.canlac());
console.log(l.canpan());
console.log(l.canfru());
*/

class Hotel {
  constructor(numHabitacion, tipo) {
    this._numHabitacion = numHabitacion;
    this._tipo = tipo;
  }
}
