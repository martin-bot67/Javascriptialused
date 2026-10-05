import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.Font;
import javax.swing.BorderFactory;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.SwingConstants;
import javax.swing.SwingUtilities;

public class TekstiKuvamine extends JFrame {
    private final JTextField textField;
    private final JLabel displayedText;

    public TekstiKuvamine() {
        super("Teksti kuvamine");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setMinimumSize(new Dimension(560, 360));
        setSize(760, 460);
        setLocationRelativeTo(null);

        Color background = new Color(242, 245, 241);
        JPanel content = new JPanel(new BorderLayout(16, 20));
        content.setBorder(BorderFactory.createEmptyBorder(28, 32, 32, 32));
        content.setBackground(background);

        JLabel heading = new JLabel("Teksti ekraanile", SwingConstants.CENTER);
        heading.setFont(new Font("Georgia", Font.BOLD, 26));

        textField = new JTextField();
        textField.setFont(new Font("SansSerif", Font.PLAIN, 16));
        textField.setToolTipText("Sisesta sõna või lause");

        JButton showButton = new JButton("Kuva tekst");
        showButton.setFont(new Font("SansSerif", Font.PLAIN, 16));
        showButton.setBackground(new Color(23, 99, 73));
        showButton.setForeground(Color.WHITE);
        showButton.addActionListener(event -> showText());
        textField.addActionListener(event -> showText());
        getRootPane().setDefaultButton(showButton);

        JPanel controls = new JPanel(new BorderLayout(10, 0));
        controls.setBackground(background);
        controls.add(textField, BorderLayout.CENTER);
        controls.add(showButton, BorderLayout.EAST);

        JPanel top = new JPanel(new BorderLayout(0, 18));
        top.setBackground(background);
        top.add(heading, BorderLayout.NORTH);
        top.add(controls, BorderLayout.SOUTH);

        displayedText = new JLabel("", SwingConstants.CENTER);
        displayedText.setVerticalAlignment(SwingConstants.CENTER);
        displayedText.setFont(new Font("Georgia", Font.BOLD, 36));

        content.add(top, BorderLayout.NORTH);
        content.add(displayedText, BorderLayout.CENTER);
        setContentPane(content);
    }

    private void showText() {
        String text = textField.getText().trim();
        if (text.isEmpty()) {
            displayedText.setText("");
            return;
        }

        String escapedText = text.replace("&", "&amp;")
                .replace("<", "&lt;")
                .replace(">", "&gt;");
        int textWidth = Math.max(380, getWidth() - 120);
        displayedText.setText("<html><div style='width:" + textWidth
                + "px; text-align:center; font-size:36pt; font-weight:bold;'>"
                + escapedText + "</div></html>");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TekstiKuvamine().setVisible(true));
    }
}
