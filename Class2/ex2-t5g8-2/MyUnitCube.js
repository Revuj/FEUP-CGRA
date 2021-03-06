/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			0.5,0.5,0.5,     //0
			0.5,-0.5,0.5,	 //1
			-0.5, -0.5, 0.5,	 //2
            -0.5, 0.5, 0.5,		     //3
            0.5,0.5,-0.5,     //4
			0.5,-0.5,-0.5,	 //5
			-0.5, -0.5, -0.5,	 //6
			-0.5, 0.5, -0.5	     //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0,3,2,
            0,2,1,
            4,6,7,
            4,5,6,
            4,0,1,
            4,1,5,
            7,2,3,
            7,6,2,
            7,3,0,
            7,0,4,
            6,1,2,
            6,5,1,
			
		];

		this.normals = [
			1,0,0,     //0
			// 1,-1,1,	 //1
			// -1, 0, 0,	//2
            // -1, 0, 0,		     //3
            // 1,0,0,     //4
			// 1,0,0,	 //5
			// -1, 0, 0,	 //6
			// -1, 0, 0,	     //7
			// 0,1,0,     //0
			// 0,0,1,     //0
			// 1,-1,1,	 //1
			// 1,-1,1,	 //1
			// 0, -1, 0,	//2
			// 0, 0, 1,	//2
			// 0, 1, 0,		     //3
			// 0, 0, 1,		     //3
			// 0, 1, 0,     //4
			// 0,0,-1,     //4
			// 0,-1,0,	 //5
			// 0,0,-1,	 //5
			// 0, -1, 0,	//6
			// 0, 0, -1,	//6
			// 0, 1, 0,	     //7
			// 0, 0, -1,	     //7
		];
		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
    }
    
    
}

