/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayParallelogram').name('Display Parallelogram');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displaySmallTriangle').name('Display Small Triangle');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayBigTriangle').name('Display Big Triangle');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}