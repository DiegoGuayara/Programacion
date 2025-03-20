import java.util.Scanner;

public class Ejercicios{
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

        //Ejercicio 3
        // System.out.println("Ingrese numero 1.");
        // int num1= in.nextInt();
        // System.out.println("Ingrese numero 2");
        // int num2= in.nextInt();

        // if(num1>num2){
        //     System.out.printf("%d es mayor que %d", num1, num2);
        // }else if(num2 > num1){
        //     System.out.printf("%d es mayor que %d", num2, num1);
        // }else if(num1 == num2){
        //     System.out.println("Los dos numeros son iguales");
        // }

        //Ejercicio 4
        // System.out.println("Ingrese numero 1");        
        // int num = in.nextInt();
        // System.out.println("Ingrese numero 2");        
        // int num2 = in.nextInt();
        // System.out.println("Ingrese numero 3");
        // int num3 = in.nextInt();

        
        // if(num>num2 && num>num3){
        //     System.out.printf("%d es mayor que %d y es mayor que %d", num, num2, num3);
        // }else if(num2>num && num2>num3){
        //     System.out.printf("%d es mayor que %d y es mayor que %d", num2, num, num3);
        // }else if(num3>num && num3>num2){
        //     System.out.printf("%d es mayor que %d y es mayor que %d", num3, num, num2);
        // }else if(num == num2 && num == num3 && num2 == num3){
        //     System.out.println("Los tres numeros son iguales");
        // }

        //Seccion 4
        //Ejercicio 1
        // System.out.println("Ingrese angulo 1");
        // float ang1 = in.nextFloat();
        // System.out.println("Ingrese angulo 2");
        // float ang2 = in.nextFloat();
        // System.out.println("Ingrese angulo 3");
        // float ang3 = in.nextFloat();
        // float tr = ang1+ang2+ang3;

        // if(tr == 180){
        //     System.out.println("Si es un triangulo");
        // }else{
        //     System.out.println("No es un triangulo");
        // }

        //Ejercicio 2
        // System.out.println("Ingrese un numero");
        // int num = in.nextInt();

        // if(num % 2 == 0){
        //     System.out.println("Par");
        // }else{
        //     System.out.println("Impar");
        // }

        //Ejercicio 3
        // System.out.println("Ingrese un numero");
        // int num = in.nextInt();

        // if(num%5==0){
        //     System.out.println("Si es divisible entre 5");
        // }else{
        //     System.out.println("No es divisible entre 5");
        // }

        //Seccion 5
        //Ejercicio 1
        // for(int i= 0; i<=100; i++){
        //     System.out.println(i);
        // }
        // for(int j=100; j>=0; j--){
        //     System.out.println(j);
        // }

        //Ejercicio 2
        // for(int i = 0; i<=50; i++){
        //     System.out.printf("3 X %d = %d\n",i, i*3);
        // }

        //Ejercicio 3
        // System.out.println("A cuantos estudiantes va a calificar? El rango de notas es: 0.0 - 5.0");
        // int est = in.nextInt();

        // if(est!=0){
        //     for(int i=1; i<=est; i++){
        //         System.out.println("Ingrese nota 1");
        //         float nota1 = in.nextFloat();
        //         System.out.println("Ingrese nota 2");
        //         float nota2 = in.nextFloat();
        //         System.out.println("Ingrese nota 3");
        //         float nota3 = in.nextFloat();

        //         float prom = (nota1+nota2+nota3)/3;

        //         if((nota1>= 0 && nota1 <= 5) && (nota2>= 0 && nota2 <= 5) && (nota3>= 0 && nota3 <= 5)){
        //             if(prom>=0 && prom < 3){
        //                 System.out.printf("El promedio del estudiante %d es: %.2f. Promedio bajo.\n", i, prom);
        //             }else if(prom >=3 && prom < 4){
        //                 System.out.printf("El promedio del estudiante %d es: %.2f. Promedio basico.\n", i, prom);
        //             }else if(prom >= 4 && prom <= 5){
        //                 System.out.printf("El promedio del estudiante %d es: %.2f. Promedio Alto.\n", i, prom);
        //             }
    
        //         }else{
        //             System.out.println("Una de las notas se salio del rango");
        //         }

        //     }
        // }

        //Ejercicio 4
        // System.out.println("Ingrese un numero");
        // int fac = in.nextInt();
        // int ac = 1;

        // for(int i = 1; i<=fac; i++){
        //     ac*=i;
        // }
        
        // System.out.printf("El factorial del numero %d es: %d", fac, ac);

        //Seccion 5
        //Ejercicio 1
        // System.out.println("Ingrese un numero");
        // int n = in.nextInt();

        // for(int i = 1; i<=n; i++){
        //     System.out.println(i);
        // }

        //Ejercicio 2
        // System.out.println("Ingrese un numero");
        // int n = in.nextInt();
        // int ac = 0;

        // for(int i=1; i<=n; i++){
        //     ac+=i;
        // }

        // System.out.printf("La suma total es: %d", ac);

        //Ejercicio 3
        // for(int i = 0; i <= 50 ; i++){
        //     System.out.printf("10 X %d = %d\n", i, i*10);
        // }

        //Ejercicio 4
        // System.out.println("Ingrese un numero");
        // int n = in.nextInt();

        // for(int i = 0; i<=n; i++){
        //     if(i%2!=0){
        //         System.out.println(i);
        //     }
        // }

        //Ejercicio 5
        // System.out.println("Quiere salir? S para si y N para no");
        // String op = in.nextLine();

        // while(!(op.equals("S"))){
        //     System.out.println("No ha salido");
        //     System.out.println("Quiere salir? S para si y N para no");
        //     op = in.nextLine();
        // }
        // System.out.println("Ya salió");

        //Ejercicio 6 
        // float ac = 0;

        // for(int i = 1; i <=10; i++){
        //     System.out.printf("Ingrese nota %d.\n", i);
        //     float notas = in.nextFloat();
        //     ac+=notas;
        // }
        
        // System.out.printf("El promedio de las 10 notas ingresadas es: %.2f.", ac/10);

        //Ejercicio 7
        // float ac = 0;
        // float prom = 0;
        // System.out.println("Cuantos numeros va a ingresar?.");
        // int corte = in.nextInt();

        // for(int i = 1; i<=corte; i++){
        //     System.out.printf("Ingrese numero %d.\n", i);
        //     float numeros = in.nextFloat();
        //     if(numeros > 0){
        //         ac+=numeros;
        //         prom++;
        //     }else{
        //         System.out.println("Solo puede ingresar numeros mayores a 0");
        //         break;
        //     }
        // }

        // System.out.printf("El promedio es: %.2f.", ac/prom);
        
        //Ejercicio 8


    }
}