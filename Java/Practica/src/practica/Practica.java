package practica;


public class Practica {

    public static void main(String[] args) {
        String[][] arr1 = {{"A", "B", "C"}, {"D", "E", "F"}, {"G", "H", "I"}};
        String[][] arr2 = {{"J", "K", "L"}, {"M", "N", "O"}, {"P", "Q", "R"}};
        for(int i = 0; i<arr1.length; i++){
            for(int j = 0; j<arr1[i].length; j++){
                String[][] interc1 = arr1;
                String[][] interc2 = arr2;
                arr1[i][j] = arr2[i][j];
                interc2 = interc1;
            }
        }
    }
    
}
