sueldo = 0;

def cajero():
     global sueldo;
     
     prg = input("""Ingrese una opcion:
1. Consultar saldo
2. Consignar
3. Retirar
4. Finalizar. 
""");
     
     if (prg == '1'):
          print(f'En este momento usted tiene {sueldo} pesos');
          cajero();
          
     elif (prg == '2'):
          cantidad = float(input('Ingrese cuanto quiere consignar. '));
          if(cantidad > 0):
               sueldo+=cantidad;
               print(f'Usted consignó {cantidad} pesos y su sueldo actual es {sueldo} pesos');
               cajero();
          else:
               print('valor incorrecto');
               cajero();
               
     elif (prg == '3'):
          cantidad = float(input('Ingrese cuanto quiere retirar. '));
          if(cantidad>0 and sueldo-cantidad>=0):
               sueldo-=cantidad;
               print(f'Usted retiró {cantidad} pesos y su sueldo actual es {sueldo} pesos');
               cajero();
          else:
               print('No tiene los fondos suficientes para hacer este retiro');
               cajero();
               
     elif (prg == '4'):
          print('Hasta luego');
          
     else:
          cajero();


cajero();

