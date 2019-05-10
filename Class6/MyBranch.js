class MyBranch extends CGFobject {
    constructor(scene) {
        super(scene);
        this.cylinder = new MyCylinder(scene,8,4,false,false);
        this.branchColor = new CGFappearance(scene);
        this.branchColor.setDiffuse(0.55,0.27,0.08);
    }
    display() {
        this.scene.pushMatrix();
        this.scene.scale(0.5,1,0.5);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.branchColor.apply();
        this.cylinder.display();
        this.scene.popMatrix();
    }
}