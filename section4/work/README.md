## Section 4 ##
* this project is used to create a magic cube which include eight mesh group
and they can rotate in the same way.

#### Usage ####

```javascript
<script src="build/three.min.js"></script>
<script src="js/OrbitControls.js"></script>
```

* the code can define values to xyz axis and "x += 5" means you can choose "-10, -5, 0, 5".

```javascript
for (var x = -10; x < 10; x += 5) {
for (var y = -10; y < 10; y += 5) {
for (var z = -10; z < 10; z += 5) {
```

* the code can define 8 different colour for 8 quadrants(8 cube groups)

```javascript
console.log("X: " +x+ ", Y:" +y+ ", Z:" +z);
var boxGeometry = new THREE.BoxGeometry(3,3,3);
var boxMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
if (x >= 0 && y >= 0 && z >= 0){
boxMaterial = new THREE.MeshLambertMaterial({color: 0xF67280});
} else if ( x <= 0 &&  y >= 0 &&  z >= 0) {
boxMaterial = new THREE.MeshLambertMaterial({color: 0xF88195});
} else if ( x >= 0 &&  y <= 0 &&  z >= 0){
boxMaterial = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
} else if ( x >= 0 &&  y >= 0 &&  z <= 0){
boxMaterial = new THREE.MeshLambertMaterial({color: 0xFF5151});
} else if ( x <= 0 &&  y <= 0 &&  z >= 0){
boxMaterial = new THREE.MeshLambertMaterial({color: 0x9F35FF});
} else if ( x <= 0 &&  y >= 0 &&  z <= 0){
boxMaterial = new THREE.MeshLambertMaterial({color: 0xF75000});
} else if ( x >= 0 &&  y <= 0 &&  z <= 0){
boxMaterial = new THREE.MeshLambertMaterial({color: 0xF0FFF0});
} else {
boxMaterial = new THREE.MeshLambertMaterial({color: 0x005757});
}
```

* this code can define each cube group rotate at random.

```javascript
function drawFrame(){
  requestAnimationFrame(drawFrame);


  rot += 0.01;
  cubes.forEach(function(c,i){
  c.rotation.x = rot;
});
  renderer.render(scene, camera);
}
```
