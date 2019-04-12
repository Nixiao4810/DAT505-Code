## Section 5 ##
* this project mainly let me learn about the way to control the single cube to
rotate and change their color.It can also change each cubes angle at random.

#### Usage ####

```javascript
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

* the following code can make you mouse control your camera.

```javascript
controls = new THREE.OrbitControls(camera, renderer.domElement);
```

* the following code help create a cube group,

```javascript
var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
//The color of the material is assigned a random color
var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF33});
if (x==-5 && y==-5){
  boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF39});
} else if (x==5 && y==5){
  boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFE300});
} else {
  boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
}
var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
```

* change the cube's angle at random.

```javascript
mesh.rotation.x = Math.random() * 2 * Math.PI;

var randomValueX = (Math.random() * 0.1)- 0.05;
    randomValueY = (Math.random() * 0.1)- 0.05;
    randomSpeedX.push(randomValueX);
    randomSpeedY.push(randomValueY);
```
![ effect ](/section5/work/a.jpg)
