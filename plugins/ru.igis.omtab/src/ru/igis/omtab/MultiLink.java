package ru.igis.omtab;

import java.awt.Color;

public class MultiLink {
	
	private String name;
	private Color color;
	private int width;
	private MapOb[] mapobs;
	
	public MultiLink(String name, MapOb[] mapobs, Color color, int width) {
		super();
		this.name = name;
		this.color = color;
		this.width = width;
		this.mapobs = mapobs;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Color getColor() {
		return color;
	}

	public void setColor(Color color) {
		this.color = color;
	}

	public int getWidth() {
		return width;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public MapOb[] getMapobs() {
		return mapobs;
	}

	public void setMapobs(MapOb[] mapobs) {
		this.mapobs = mapobs;
	}
}
