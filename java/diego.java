import java.util.Scanner;

public class Diego{
	static int saldo = 0;
	public static void main(String args[]){
		saludar();
	}

	static void saludar(){
		int opcion;
		Scanner in = new Scanner(System.in);
		System.out.printf("Ingrese una opción:\n 1. Consultar saldo.\n 2. Consignar.\n 3. Retirar.\n 4. Terminar.\n");
		opcion = in.nextInt();

		if(opcion == 1){
			System.out.printf("Tu saldo actual es %d.\n", saldo);
			saludar();

		}else if(opcion == 2){
			System.out.println("Ingrese cuanto va a consignar");
			opcion = in.nextInt();

			if(opcion > 0){
				saldo+=opcion;
				System.out.printf("Usted consignó %d pesos.\n", opcion);
			}
			saludar();

		}else if(opcion == 3){
			System.out.println("Ingrese cuanto va a retirar");
			opcion = in.nextInt();

			if(saldo-opcion >= 0){
				saldo-=opcion;
				System.out.printf("Usted retiró %d pesos.\n", opcion);
			}else{
				System.out.println("Fondos insuficientes.");
			}
			saludar();

		}else if(opcion == 4){
			System.out.println("Hasta luego");

		}else{
			saludar();
		}


	}
}