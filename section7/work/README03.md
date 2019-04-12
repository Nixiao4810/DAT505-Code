
## Section 07 - 3 ##
* this code can clone the mode "eye" and make them appear in the sence at random.


#### Usage ####

```javascript
<script src="build/three.min.js"></script>
<script src="js/libs/stats.min.js"></script>
```


* set UVs
```javascript
var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
for ( i = 0; i < faceVertexUvs.length; i ++ ) {
  var uvs = faceVertexUvs[ i ];
  var face = geometry.faces[ i ];
  for ( var j = 0; j < 3; j ++ ) {
    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
  }
}
```

* set random position to the eyes

```javascript
for (var i = 0; i < eyesNum; i++){
  mesh = new THREE.Mesh( geometry, material );
  xPos[i] = Math.random() * 80 - 40;
  yPos[i] = Math.random() * 80 - 40;
  mesh.position.x = xPos[i];
  mesh.position.y = yPos[i];

  var randSize = Math.random() * 0.5;}
```

* copy the mouse's positionNum and paste it to eyes,then the effect is that the eyes will stare at the mouse when it moves.

```javascript
function render() {
	console.log(window.innerHeight)
	for ( var i = 0; i < eyesNum; i++){
	eyes[i].rotation.x = mouseY/window.innerHeight*2;
	eyes[i].rotation.y = mouseX/window.innerWidth*2;

  function onDocumentMouseMove( event ) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  ```
