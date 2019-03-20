/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall= new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);

        this.materialRed = new CGFappearance(scene);
        this.materialRed.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.materialRed.setDiffuse(0.5, 0, 0, 1.0);
        this.materialRed.setSpecular(1.0, 0, 0, 1.0);
        this.materialRed.setShininess(10.0);

        this.materialYellow = new CGFappearance(scene);
        this.materialYellow.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.materialYellow.setDiffuse(0.5, 0.5, 0, 1.0);
        this.materialYellow.setSpecular(1.0, 1.0, 0, 1.0);
        this.materialYellow.setShininess(10.0);

        this.materialPurple = new CGFappearance(scene);
        this.materialPurple.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.materialPurple.setDiffuse(0.4, 0, 0.4, 1.0);
        this.materialPurple.setSpecular(0.8, 0, 0.8, 1.0);
        this.materialPurple.setShininess(10.0);

        this.materialPink = new CGFappearance(scene);
        this.materialPink.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.materialPink.setDiffuse(0.5, 0, 0.2, 1.0);
        this.materialPink.setSpecular(1.0, 0.08, 0.58, 1.0);
        this.materialPink.setShininess(10.0);

        this.materialBlue = new CGFappearance(scene);
        this.materialBlue.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.materialBlue.setDiffuse(0, 0, 0.5, 1.0);
        this.materialBlue.setSpecular(0, 0, 1.0, 1.0);
        this.materialBlue.setShininess(10.0);

        this.materialOrange = new CGFappearance(scene);
        this.materialOrange.setAmbient(0.3, 0.3, 0.3, 1.0);
        this.materialOrange.setDiffuse(0.4, 0.1, 0, 1.0);
        this.materialOrange.setSpecular(0.8, 0.2, 0, 1.0);
        this.materialOrange.setShininess(10.0);

    }

    updateBuffers() {
		
	}

    display() {
        // save transformation matrix 
        this.scene.pushMatrix();

        const pi = Math.PI;


        //rotation matrix for diamond
        var mr = [Math.cos(pi / 4), Math.sin(pi / 4), 0, 0,
        -Math.sin(pi / 4), Math.cos(pi / 4), 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ];

        //translation matrix for diamond
        var mt = [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            Math.sqrt(0.5), Math.sqrt(0.5), 0, 1
        ];

        this.scene.multMatrix(mt);
        this.scene.multMatrix(mr);


        // ---- BEGIN Primitive drawing section
        this.scene.customMaterial.apply();
        this.diamond.display();

        this.scene.popMatrix();

        
        this.scene.pushMatrix();

        //transformation for parallelogram

        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(-pi / 4, 0, 0, 1);


        //this.materialYellow.apply();
        this.scene.customMaterial.apply();
        this.parallelogram.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(1 / Math.sqrt(2), -1 / Math.sqrt(2), 1);
        this.scene.translate(1, 1, 0);

        this.triangle.applyGreenTexture();
        this.triangle.display(); 

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-1, -1, 0);
        this.scene.scale(-1, 1, 1);

        this.triangle.applyBlueTexture();
        this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-2, 0, 0);
        this.scene.scale(1, -1, 0);

        this.triangleBig.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(Math.sqrt(2), Math.sqrt(2), 1);
        this.scene.translate(-1, 1, 0);

        this.triangle.applyPurpleTexture();
        this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(2 * Math.sqrt(2), 1.3 * Math.sqrt(2), 0);
        this.scene.rotate(pi / 2, 0, 0, 1);


        //this.materialRed.apply();
        this.triangleSmall.display();

        this.scene.popMatrix();
        
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleBig.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleBig.disableNormalViz();
    }

    
}