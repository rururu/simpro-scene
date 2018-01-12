package ru.igis.omtab;

import java.awt.BorderLayout;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javafx.application.Platform;
import javafx.embed.swing.JFXPanel;
import javafx.geometry.HPos;
import javafx.geometry.VPos;
import javafx.scene.Scene;
import javafx.scene.layout.Region;
import javafx.scene.paint.Color;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class FXBrowser {

    private JPanel panel = new JPanel(new BorderLayout());
    private JButton back = new JButton();
    private JButton forward = new JButton();
    private Browser browser = null;
    private JFrame frame = null;

	public FXBrowser(String title, String source)
			throws ClassNotFoundException {
		// This method is invoked on the EDT thread
		if (frame == null) {
			frame = new JFrame(title);
			final JFXPanel fxPanel = new JFXPanel();
			final JPanel topBar = new JPanel(new BorderLayout());
			back.setIcon(new ImageIcon(FXBrowser.class
					.getResource("/ru/igis/omtab/resources/w.gif")));
			back.setToolTipText("Backward");
			back.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent evt) {
					browser.goBack();
				}
			});
			forward.setIcon(new ImageIcon(FXBrowser.class
					.getResource("/ru/igis/omtab/resources/e.gif")));
			forward.setToolTipText("Backward");
			forward.addActionListener(new java.awt.event.ActionListener() {
				public void actionPerformed(java.awt.event.ActionEvent evt) {
					browser.goForward();
				}
			});
			topBar.add(back, BorderLayout.WEST);
			topBar.add(forward, BorderLayout.EAST);
			panel.add(topBar, BorderLayout.NORTH);
			panel.add(fxPanel, BorderLayout.CENTER);
			frame.add(panel);
			frame.setSize(800, 600);
			frame.setLocationRelativeTo(null);
			frame.setVisible(true);
			frame.setDefaultCloseOperation(JFrame.DO_NOTHING_ON_CLOSE);
			frame.addWindowListener(new WindowAdapter() {
				public void windowClosing(WindowEvent e) {
					frame.setVisible(false);
				}
			});

			Platform.runLater(new Runnable() {
				@Override
				public void run() {
					initFX(fxPanel, source);
				}
			});
		} else {
			if (browser != null) {
				frame.setVisible(true);
			}
		}
	}

    public void browserLoadPage(String title, String page) {
    	frame.setTitle(title);
		browser.loadPage(page);
	}

	public JFrame getFrame() {
		return frame;
	}

    private void initFX(JFXPanel fxPanel, String source) {
		// This method is invoked on the JavaFX thread
		Scene scene = createScene(source);
		fxPanel.setScene(scene);
	}

	private Scene createScene(String source) {
		browser = new Browser(source);
		Scene scene = new Scene(browser, 750, 500, Color.web("#666970"));
		return (scene);
	}
}

class Browser extends Region {
    final WebView web_view = new WebView();
    final WebEngine webEngine = web_view.getEngine();
     
    public Browser(String page) {
        //apply the styles
        getStyleClass().add("browser");
        // load the web page
        webEngine.load(page);
        //add the web view to the scene
        getChildren().add(web_view);
 
    }
 
    @Override protected void layoutChildren() {
        double w = getWidth();
        double h = getHeight();
        layoutInArea(web_view,0,0,w,h,0, HPos.CENTER, VPos.CENTER);
    }
 
    @Override protected double computePrefWidth(double height) {
        return 750;
    }
 
    @Override protected double computePrefHeight(double width) {
        return 500;
    }
    
    public void executeScript(String script) {
        Platform.runLater(() -> {
            webEngine.executeScript("history.back()");
        });
    }
    
    public void goBack() {
        executeScript("history.back()");
    }

    public void goForward() {
        executeScript("history.forward()");
    }

    public void loadPage(String page) {
        Platform.runLater(() -> {
        	webEngine.load(page);
        });
    }
}
