## Test001 ##
  this project is used to let us know how to create a basic 3D sence, and learn to make and combine several basic geometries in the sence.

### Usage ###
```html
<script src="build/three.js"></script>
```
* this code is used to create some basic elements of a WebGL, the code help defines the scene itself and other basic components which is included in it.

```javascript
var scene, camera, renderer;
var geometry1, material1, border1, mesh1;
var geometry2, material2, mesh2;
var geometry3, material3, border3, mesh3;

function init(){
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 600, 10000 );

  renderer = new THREE.WebGLRenderer({antialias:true});

  renderer.setClearColor("#000000");

  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );


}
```

* this code is used to create the main geometry and define the numerical value of this geometry's size, position and colour.

```javascript
function geometry(){

  geometry1 = new THREE.IcosahedronGeometry( 50, 1 );
  material1 = new THREE.MeshNormalMaterial( { wireframe : true } );
  mesh1 = new THREE.Mesh( geometry1, material1 );
  border1 = new THREE.EdgesHelper(mesh1, 0xffff00 );
  mesh1.position.z = -900;
  mesh1.position.y = -50;
  scene.add( mesh1 );

  geometry2 = new THREE.IcosahedronGeometry( 50, 1 );
  material2 = new THREE.MeshToonMaterial( { color: "#FF000F9" } );
  mesh2 = new THREE.Mesh( geometry2, material2);
  mesh2.position.z = -900;
  mesh2.position.y = -50;

  scene.add( mesh2 );

  geometry3 = new THREE.IcosahedronGeometry( 200, 1 );
  material3 = new THREE.MeshNormalMaterial( { wireframe : true } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  border3 = new THREE.EdgesHelper(mesh3, 0xffff00 );
  mesh3.position.z = -900;
  mesh3.position.y = -50;

  scene.add( mesh3 );

}
```

* this code is used to make the geometry rotate and control it's speed.

```javascript
var render = function () {
  requestAnimationFrame( render );

  mesh1.rotation.x += 0.02;
  mesh1.rotation.y += 0.02;
  mesh2.rotation.x += 0.02;
  mesh2.rotation.y += 0.02;
  mesh3.rotation.x += 0.02;
  mesh3.rotation.y += 0.02;

  renderer.setClearColor("#000000");

  renderer.render(scene, camera);
};
```
