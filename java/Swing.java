import javax.swing.*;

public class Swing {
    public static void main(String args[]){
        String nombre = JOptionPane.showInputDialog("Cual es tu nombre");
        System.out.printf("Hola %s", nombre);
    }
}