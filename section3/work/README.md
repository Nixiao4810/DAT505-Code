## Section 3 ##
* this project uses last section's knowledge to create a simple scene.

### Usage ###

```javascript
<script src="build/three.min.js"></script>
```

* the following code is used to create three cubes and the geometry2 is used as a primitive skybox ,the last four lines control the materal of the skybox and the terrian.


```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
var geometry2 = new THREE.BoxGeometry(12500, 5700, -12500);
var geometry3 = new THREE.BoxGeometry(500, 10, 500);

var texture = new THREE.TextureLoader().load('textures/demo4.jpg');
var material2 = new THREE.MeshBasicMaterial({map : texture});

var texture2 = new THREE.TextureLoader().load('textures/demo5.jpg');
var material3 = new THREE.MeshBasicMaterial({map : texture2});
```
![ Picture's effect ](/secsion3/work/S2-01_Exercise-GeometriesAndMaterials-SOLVED/A.jpg)
