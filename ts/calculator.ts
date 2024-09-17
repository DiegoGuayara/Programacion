const calculator = (a: number, b: number, op: "Mul" | "Sum" | "Div") => {
  if (op === "Mul") return a * b;
  if (op === "Sum") return a + b;

  if (op === "Div") {
    if (b === 0) return "No se puede dividir entre 0";
    return a / b;
  }
};

console.log(calculator(10, 2, "Mul"));
