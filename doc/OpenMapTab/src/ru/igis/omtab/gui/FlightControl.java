package ru.igis.omtab.gui;

import java.awt.Component;
import java.awt.GridLayout;

import javax.swing.BoxLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSlider;
import javax.swing.JTextField;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

import edu.stanford.smi.protege.util.ModalDialog;
import ru.igis.omtab.Context;
import ru.igis.omtab.NavOb;

public class FlightControl extends JFrame {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	int course = 0;
	JLabel label = new JLabel("Crs "+course);

	public FlightControl(NavOb no, int max_spd, int max_vspd, int max_alt) {
		super(no.getName());
		course = no.getCourse();
		label.setText("Crs " + course);
		JSlider slider1 = new JSlider(JSlider.HORIZONTAL, -30, 30, 0);
		slider1.setMinorTickSpacing(2);
		slider1.setMajorTickSpacing(10);
		slider1.setPaintTicks(true);
		slider1.setPaintLabels(true);
		
		JSlider slider2 = new JSlider(JSlider.VERTICAL, 0, max_spd, (int) no.getSpeed());
		slider2.setMinorTickSpacing(4);
		slider2.setMajorTickSpacing(max_spd / 10);
		slider2.setPaintTicks(true);
		slider2.setPaintLabels(true);

		JPanel panel2 = new JPanel();
		panel2.setLayout(new BoxLayout(panel2, BoxLayout.Y_AXIS));
		panel2.add(new JLabel("Spd"));
		panel2.add(slider2);

		JSlider slider3 = new JSlider(JSlider.VERTICAL, -max_vspd, max_vspd, (int) no.getVerticalSpeed());
		slider3.setMinorTickSpacing(2);
		slider3.setMajorTickSpacing(max_vspd / 5);
		slider3.setPaintTicks(true);
		slider3.setPaintLabels(true);

		JPanel panel3 = new JPanel();
		panel3.setLayout(new BoxLayout(panel3, BoxLayout.Y_AXIS));
		panel3.add(new JLabel("VSpd"));
		panel3.add(slider3);
		
		JSlider slider4 = new JSlider(JSlider.VERTICAL, 0, max_alt, no.getAltitude());
		slider4.setMinorTickSpacing(2);
		slider4.setMajorTickSpacing(max_alt / 10);
		slider4.setPaintTicks(true);
		slider4.setPaintLabels(true);

		JPanel panel4 = new JPanel();
		panel4.setLayout(new BoxLayout(panel4, BoxLayout.Y_AXIS));
		panel4.add(new JLabel("Alt"));
		panel4.add(slider4);

		JPanel panel5 = new JPanel();
		panel5.setLayout(new BoxLayout(panel5, BoxLayout.X_AXIS));
		panel5.add(panel2);
		panel5.add(panel3);
		panel5.add(panel4);
		
		JPanel panel1 = new JPanel();
		panel1.setLayout(new BoxLayout(panel1, BoxLayout.Y_AXIS));
		label.setAlignmentX(Component.CENTER_ALIGNMENT);
		panel1.add(label);
		panel1.add(slider1);
		panel1.add(panel5);
		add(panel1);
		
		slider1.addChangeListener(new ChangeListener() {
			public void stateChanged(ChangeEvent e) {
				JSlider source = (JSlider) e.getSource();
				if (!source.getValueIsAdjusting()) {
					int crs = (int) source.getValue();
					course += crs;
					if (course > 359)
						course -= 360;
					else if (course < 0)
						course += 360;
					label.setText("Crs " + course);
					slider1.setValue(0);
					if (slider1.getValue() != crs)
						no.setCourse(course);;
				}
			}
		});
		
		slider2.addChangeListener(new ChangeListener() {
			public void stateChanged(ChangeEvent e) {
				JSlider source = (JSlider) e.getSource();
				if (!source.getValueIsAdjusting()) {
					int spd = (int) source.getValue();
					no.setSpeed((double) spd);
				}
			}
		});
		
		slider3.addChangeListener(new ChangeListener() {
			public void stateChanged(ChangeEvent e) {
				JSlider source = (JSlider) e.getSource();
				if (!source.getValueIsAdjusting()) {
					int vspd = (int) source.getValue();
					no.setVerticalSpeed((double) vspd);
				}
			}
		});
		
		slider4.addChangeListener(new ChangeListener() {
			public void stateChanged(ChangeEvent e) {
				JSlider source = (JSlider) e.getSource();
				if (!source.getValueIsAdjusting()) {
					int alt = (int) source.getValue();
					no.setAltitude(alt);
				}
			}
		});
	}
	
	public static FlightControl instance(NavOb no) {

		JPanel panel5 = new JPanel();
		panel5.setLayout(new GridLayout(3, 2, 10, 10));
		panel5.add(new JLabel("Max Speed"));
		JTextField max_speed = new JTextField("550");
		panel5.add(max_speed);
		panel5.add(new JLabel("Max Vertical speed"));
		JTextField max_vspeed = new JTextField("50");
		panel5.add(max_vspeed);
		panel5.add(new JLabel("Max Altitude"));
		JTextField max_altitude = new JTextField("40000");
		panel5.add(max_altitude);

		int ans = Context.showModal("Flight Control", panel5);
		if (ans == ModalDialog.OPTION_YES) 
			FlightControl.instance(no, 
					Integer.parseInt(max_speed.getText()), 
					Integer.parseInt(max_vspeed.getText()),
					Integer.parseInt(max_altitude.getText()));
		return null;
	}
	
	public static FlightControl instance(NavOb no, int max_spd, int max_vspd, int max_alt) {
		
		FlightControl frame = new FlightControl(no, max_spd, max_vspd, max_alt);
		frame.pack();
		frame.setLocationRelativeTo(null);
		frame.setVisible(true);
		return frame;
	}

}
