/*
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License");  you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for
 * the specific language governing rights and limitations under the License.
 *
 * Copyright (C) 2007 Ruslan P. Sorokin (sorokin@oogis.ru)
 * and Object-Oriented Geo-Information System Research Laboratory (http://www.oogis.ru)
 * All Rights Reserved.
 */
package ru.igis.omtab;

import edu.stanford.smi.protege.model.Cls;
import edu.stanford.smi.protege.model.Instance;
import edu.stanford.smi.protege.ui.InstanceField;
import edu.stanford.smi.protege.util.CollectionUtilities;
import edu.stanford.smi.protege.util.ModalDialog;

import javax.swing.*;
import java.awt.*;
import java.util.*;
import java.util.List;

public class Context {
	
	private List<Map<Object,Object>> runmaps = new ArrayList<Map<Object,Object>>();
	private List<String> runlabs = new ArrayList<String>();
	private int runcount = 0;
	
	@SuppressWarnings("unchecked")
	private Object[] getPanelAndMap(Map<Object, Object> map2){
		JPanel panel = new JPanel();
		panel.setPreferredSize(new Dimension(300,400));
		int size = map2.size();
		if(size < 11)
			panel.setLayout(new GridLayout(size,1));
		else
			panel.setLayout(new GridLayout(size/2+1,2));
		Component comp = null;
		Map<Object, Component> map3 = new HashMap<Object, Component>();
		Set<Object> set = map2.keySet();
		for (Object var: set) {
			if(var.equals("att_map_key"))
				continue;
			Object val = map2.get(var);
			if(val instanceof Map) 
			{
				String runlab = "Run: "+var;
				comp = new JLabel(runlab);
				runmaps.add((Map<Object,Object>) val);
				runlabs.add(runlab);
				runcount++;
			}
			else if(val instanceof Instance)
			{
				comp = newInstanceField(var, (Instance) val);
				map3.put(var, comp);
			}
			else
			{
				comp = new Context().new ObjectField(var, val);
				map3.put(var, comp);
			}
			panel.add(comp);
		}
		return new Object[] {panel, map3};
	}
	
	private static InstanceField newInstanceField(Object name, Instance ins)
	{
		Cls cls = ins.getDirectType();
		InstanceField infi = new InstanceField(name.toString(),CollectionUtilities.createCollection(cls));
		infi.setInstance(ins);
		infi.createSelectInstanceAction();
		infi.createRemoveInstanceAction();
		infi.createViewInstanceAction();
		infi.createCreateInstanceAction();
		return infi;
	}
	
	class ObjectField extends JPanel
	{
		private static final long serialVersionUID = 1L;
		
		JTextField field;

		public ObjectField(Object name, Object value)
		{
			super();
			setLayout(new GridLayout(2,1));
			add(new JLabel(name.toString()));
			if(value==null)
				field = new JTextField();
			else
				field = new JTextField(value.toString());
			add(field);
		}
	}
	
	public static void showUnmodal(String title, Component comp) {
        final JPanel panel = new JPanel(new BorderLayout());
        JScrollPane jsp = new JScrollPane(comp);
        panel.add(jsp, BorderLayout.CENTER);
        panel.validate();
        JFrame frame = new JFrame(title);
        frame.getContentPane().add(panel);
        frame.pack();
        frame.setLocationRelativeTo(null);
        frame.setMinimumSize(new Dimension(160,240));
        frame.setVisible(true);
	}
	
    public static int showModal(String title, Component comp) {
        final JPanel panel = new JPanel(new BorderLayout());
        JScrollPane jsp = new JScrollPane(comp);
        panel.add(jsp, BorderLayout.CENTER);
        panel.validate();
        ModalDialog.CloseCallback callback = new ModalDialog.CloseCallback() {
            public boolean canClose(int result) {
                return true;
            }
        };
        return ModalDialog.showDialog(null, comp, title,
                ModalDialog.MODE_YES_NO_CANCEL, callback);    }
    
	public int update(Map<Object, Object> map, String header1){
		if(!map.isEmpty())
		{
			Object[] panmap = getPanelAndMap(map);
			int fill = showModal(header1, (Component) panmap[0]);
			if(fill==ModalDialog.OPTION_YES)
			{
				@SuppressWarnings("unchecked")
				Set<Object> set = ((Map<Object, Object>) panmap[1]).keySet();
				for (Iterator<Object> iter = set.iterator(); iter.hasNext();) {
					Object var = iter.next();
					@SuppressWarnings("unchecked")
					Object comp = ((Map<Object, Object>) panmap[1]).get(var);
					if(comp instanceof InstanceField)
						map.put(var, ((InstanceField)comp).getInstance());
					else
						map.put(var, ((ObjectField)comp).field.getText());
				}
				return fill;
			}
			else if(fill==ModalDialog.OPTION_NO)
			{
				if(runcount<=0)
					runcount = runmaps.size();
				runcount--;
				return update(runmaps.get(runcount), runlabs.get(runcount));
			}
			return fill;
		}
		return ModalDialog.OPTION_NO;
	}
	
}
