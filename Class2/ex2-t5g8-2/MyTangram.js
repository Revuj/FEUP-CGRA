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

    }

    display() {
        // save transformation matrix 
        this.scene.pushMatrix();

        const pi = Math.PI;


        //rotation matrix for diamond
        var mr = [Math.cos(pi / 4), Math.sin(pi / 4), 0, 0,
        -Math.sin(pi / 4), Math.cos(pi / 4), 0, 0,
            1, 0, 1, 0,
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

        this.diamond.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        //transformation for parallelogram

        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.scale(1, -1, 1);
        this.scene.rotate(-pi / 4, 0, 0, 1);


        this.parallelogram.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.scale(1 / Math.sqrt(2), -1 / Math.sqrt(2), 1);
        this.scene.translate(1, 1, 0);


        this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(-1, -1, 0);
        this.scene.scale(-1, 1, 1);


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

        this.triangle.display();

        this.scene.popMatrix();
        this.scene.pushMatrix();

        this.scene.translate(2 * Math.sqrt(2), 1.3 * Math.sqrt(2), 0);
        this.scene.rotate(pi / 2, 0, 0, 1);


        this.triangleSmall.display();

        this.scene.popMatrix();
    }
}