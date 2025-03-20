import javax.swing.JFrame;

public class Frame {
    public static void main(String args[]){

        JFrame frame = new JFrame();
        frame.setTitle("JFrame title goes here");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setResizable(false);
        frame.setSize(420,420);
        frame.setVisible(true);

    }
}
