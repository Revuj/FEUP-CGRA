class MyLeaf extends CGFobject {
    constructor(scene) {
        super(scene);
        this.triangle = new MyTriangle(scene);
        this.colorLeaf = new CGFappearance(scene);
        this.colorLeaf.setDiffuse(0,1,0,1);
    }
    display() {
        this.scene.pushMatrix();
        this.colorLeaf.apply();
        this.triangle.display();
        this.scene.popMatrix();
    }
}