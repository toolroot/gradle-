private JButton getBrowseButton(JPanel panel) {
    final JButton browseBtn = new JButton(rm.getMessage("button.browse"));
    browseBtn.addActionListener(new ActionListener() {

        public void actionPerformed(ActionEvent ae) {

            JFileChooser jfChooser = new JFileChooser(); 
            jfChooser.setCurrentDirectory(new java.io.File("."));
            jfChooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
            jfChooser.setAcceptAllFileFilterUsed(false);
            guiUtil.removeFilesOfTypeFromJFileChooser(jfChooser);     
            jfChooser.showOpenDialog(panel);
       }
    });
    return browseBtn;
}
