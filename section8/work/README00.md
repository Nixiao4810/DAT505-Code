## Section 8 - 00 ##
* this project can make the eyes appear in  fixed place and they can stare at
your mouse .

#### Usage ####
```javascript
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```


* define the sequence group
```javascript
var xPos = [];
var yPos = [];
var xPosMap = [];
var yPosMap = [];
```

* modify UVs to accommodate MatCap texture.

```javascript
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;}}
```

* define the position of eyes

```javascript
for (var i = 0; i < eyesNum; i++) {
  mesh = new THREE.Mesh( geometry, material );

  xPos[i] = Math.random() * 100 - 50;
  yPos[i] = Math.random() * 100 - 50;

  xPos [0] = 0;
  yPos [0] = 0;

  xPos [1] = -50;
  yPos [1] = -50;

  xPos [2] = 50;
  yPos [2] = -50;

  xPos [3] = -50;
  yPos [3] = 50;

  xPos [4] = 50;
  yPos [4] = 50;

  xPosMap[i] = map_range(xPos[i], -50, 50, 0, window.innerWidth);
  yPosMap[i] = map_range(yPos[i], -50, 50, 0, window.innerHeight);}
```

* define the range of the eyesNum's rotation

```javascript
function render() {
	console.log(mouseY)
	for (var i = 0; i < eyesNum; i++) {

		eyes[0].rotation.y = map_range(mouseX, 0, window.innerWidth, -1.14, 1.14);
		eyes[0].rotation.x = map_range(mouseY, 0, window.innerHeight, -1.14, 1.14);

		if (mouseX<140) eyes[1].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[1].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<810) eyes[1].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[1].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.25, 0);

		if (mouseX<590) eyes[2].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.8);
		else eyes[2].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.8, -0.2);
		if (mouseY<810) eyes[2].rotation.x = map_range(mouseY, 0, 810, -1.14, -0.25);
		else eyes[2].rotation.x = map_range(mouseY, 810, window.innerHeight, -0.5, 0.25);


		if (mouseX<140) eyes[3].rotation.y = map_range(mouseX, 0, 140, -0.2, 0.25);
		else eyes[3].rotation.y = map_range(mouseX, 140, window.innerWidth, 0.25, 1.14);
		if (mouseY<35) eyes[3].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[3].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

		if (mouseX<590) eyes[4].rotation.y = map_range(mouseX, 0, 590, -1.14, -0.8);
		else eyes[4].rotation.y = map_range(mouseX, 590, window.innerWidth, -0.8, 0.2);
		if (mouseY<35) eyes[4].rotation.x = map_range(mouseY, 0, 35, 0, 0.25);
		else eyes[4].rotation.x = map_range(mouseY, 35, window.innerHeight, 0.25, 1.14);

  }
	renderer.render( scene, camera );
}
```
