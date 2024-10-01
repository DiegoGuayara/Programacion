import java.util.Scanner;

public class ejercicios{
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        
        // Seccion 1
        //Ejercicio 1
        /*int edad;
        int edadf;
        System.out.println("Ingrese cuantos años tiene. ");
        edad = in.nextInt();

        System.out.println("Escriba la cantidad de años a sumar. ");
        edadf = in.nextInt();

        System.out.println("Usted tiene " + edad + " años y dentro de " + edadf + " años va a tener " + (edad+edadf) + " años.");
        */

        //Ejercicio 2
        /*int num;
        int num2;
        System.out.println("Ingrese el primer numero.");
        num = in.nextInt();

        System.out.println("Ingrese el segundo numero.");
        num2 = in.nextInt();

        System.out.printf("Suma(%d)\nResta(%d)\nMultiplicación(%d)\nDivision(%d)\nModulo(%d)\nPotencia(%.0f)", 
        num+num2, num-num2, num*num2, num/num2, num%num2, Math.pow(num, num2));
        */

        //Seccion 2
        //Ejercicio 1
        /*float base;
        float altura;

        System.out.println("Ingrese la base.");
        base = in.nextFloat();

        System.out.println("Ingrese la altura.");
        altura = in.nextFloat();

        System.out.printf("Base=%f\nAltura=%f\nArea=%f.", base, altura, (base+altura)/2);
        */

        //Ejercicio 2
        /*float radio;

        System.out.println("Ingrese el radio");
        radio = in.nextFloat();

        System.out.printf("Area=%f\nPerimetro=%f", 3.14*(radio*radio), (2*3.14)*radio);
        */

        //Ejercicio 3
        /*float lado;

        System.out.println("Ingrese el valor de un lado");
        lado = in.nextFloat();

        System.out.printf("El volumen del cubo es %f.", lado*lado*lado);
        */

        //Ejercicio 4
        /*float precio;

        System.out.println("Ingrese el precio de su producto");
        precio = in.nextFloat();

        System.out.printf("El precio total es %f.", precio+precio*0.19);
        */

        //Ejercicio 5
        /*float precio;

        System.out.println("Ingrese el precio de su producto.");
        precio = in.nextFloat();

        System.out.printf("El precio total es %f.", precio-precio*0.1);
        */

        //Seccion 3
        //Ejercicio 1
        /*int edad;

        System.out.println("Ingrese su edad.");
        edad = in.nextInt();

        if(edad>=0 && edad < 18){
            System.out.printf("Usted tiene %d años, es menor de edad.", edad);
        }else if(edad >= 18 && edad <= 120){
            System.out.printf("Usted tiene %d años, es mayor de edad.", edad);
        }else{
            System.out.println("No existe");
        }
        */

        //Ejercicio 2
        /*String productos;
        System.out.printf("Los siguientes productos son:\n1. Lentejas\n2. Crema\n3. Arroz\n4. Vino\nCual va a elegir?\n");
        productos = in.nextLine();

        if(productos.equals("Lentejas") || productos.equals("Arroz")){
            System.out.printf("El producto %s no paga IVA", productos);
        }else if(productos.equals("Crema") || productos.equals("Vino")){
            System.out.printf("El producto %s si paga IVA.", productos);
        }else{
            System.out.println("No dijo que producto quiere elegir");
        }
        */
    }
}