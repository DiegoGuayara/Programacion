import 'dart:io';

int saldo = 0;

void cajero() {
  print("""Seleccione una opcion:
1. Consultar saldo
2. Consignar
3. Retirar
4. Salir""");
  String? entrada = stdin.readLineSync();
  int op = int.parse(entrada!);

  if (op == 1) {
    print('Tu saldo actual es $saldo');
    cajero();
  } else if (op == 2) {
    print('Cuanto va a consignar');
    String? entradaConsignar = stdin.readLineSync();
    int op2 = int.parse(entradaConsignar!);

    if (op2 > 0) {
      print('Usted consignó $op2 pesos');
      saldo += op2;
    } else {
      print('Ingrese un valor valido');
    }

    cajero();
  } else if (op == 3) {
    print('Ingrese cuanto va a retirar');
    String? entradaRetirar = stdin.readLineSync();
    int op3 = int.parse(entradaRetirar!);

    if (op3 <= saldo) {
      print('Retiró $op3 pesos');
      saldo -= op3;
    } else {
      print('Fondos insuficientes');
    }

    cajero();
  } else if (op == 4) {
    print('Hasta luego');
  } else {
    cajero();
  }
}

void main() {
  cajero();
}
