package ru.igis.omtab;

public interface Container {
	
	public boolean contains(double lat, double lon);
	
	public boolean contains(MapOb mo);

}
