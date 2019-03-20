/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene, coords) {
		super(scene);
		this.initBuffers();
		if (coords != undefined)
			this.updateTexCoords(coords);
		   
	}
	initBuffers() {
		this.vertices = [
		-1,-1,0,
		1,-1,0,
		-1,1,0,
		-1,-1,0,
		1,-1,0,
		-1,1,0
		];

		this.texCoords = [
			0, 0.5,
			0, 1,
			0.5, 1
		]

		//Counter-clockwise reference of vertices
		this.indices = [
			0,1,2,
			2,1,0
		];

		this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,-1,
			0,0,-1,
			0,0,-1
		];

		this.primitiveType = this.scene.gl.TRIANGLES;
		this.initGLBuffers();
	}

	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}

	applyBlueTexture() {
		this.texCoords = [
			0.25, 0.75,
			0.5, 0.5,
			0.75, 0.75
		];
		this.updateTexCoordsGLBuffers();
	}

	applyPurpleTexture() {
		this.texCoords = [
			0, 0,
			0, 0.5,
			0.25, 0.25
		];
		this.updateTexCoordsGLBuffers();
	}

	applyGreenTexture() {
		this.texCoords = [
			0, 0.5,
			0, 1,
			0.5, 1
		];
		this.updateTexCoordsGLBuffers();
	}

	
}