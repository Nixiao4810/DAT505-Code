## Section 2 ##
* this project is mainly to let us know how to add several basic material to
the cube and add textures to the cube from local files.

### Usage ###
```javascript
<script src="build/three.min.js"></script>

```

* The following code defines several essential elements: scene, camera, render
and the color of the background. The sixth line is used to append render to dom.
The last four lines are used to configure lights.

```javascript
var scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#5A8296");

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
```

* Create cubes

```javascript
var geometry = new THREE.BoxGeometry(100, 100, 100);
var geometry2 = new THREE.BoxGeometry(10000, 10000, 1000);
```

* In order to add local textures successfully to the cube, you need to put the pictures that you want to give into the same subfolder of this section and the name
in the code should be the same as the texture you choose outside.

```javascript
var texture = new THREE.TextureLoader().load('textures/texture.jpg');
var texture1 = new THREE.TextureLoader().load('textures/glass.jpg');

var material10 = new THREE.MeshBasicMaterial( { map : texture } );
var material11 = new THREE.MeshBasicMaterial( { map : texture1 } );
```

* Some frequently-used materials, you can change the value to achieve the effect
that you wants.

```javascript
var material7 = new THREE.MeshPhongMaterial({shininess: 1});

var material5 = new THREE.MeshLambertMaterial({

  color: '#D2BE82',

  lightMap: null,

  lightMapIntensity: 1,

  emissive: 0x000000,

  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});

var material6 = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});

var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});

var material1 = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});

var material2 = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
```

* "rot += 0.01" is used to control the initial rotational velocity of the meshs.
following code is to set the initial angle of each mesh.

```javascript
var rot = 0;

var render = function () {

  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot; //Continuously rotate the mesh
  mesh2.rotation.y = rot;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot; //Continuously rotate the mesh
  mesh4.rotation.y = rot;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot+1; //Continuously rotate the mesh
  mesh6.rotation.y = rot+1;

  mesh7.rotation.x = rot; //Continuously rotate the mesh
  mesh7.rotation.y = rot;

  mesh8.rotation.x = rot+2; //Continuously rotate the mesh
  mesh8.rotation.y = rot+2;

  mesh9.rotation.x = rot; //Continuously rotate the mesh
  mesh9.rotation.y = rot;

  mesh10.rotation.x = rot+2; //Continuously rotate the mesh
  mesh10.rotation.y = rot+2;

  mesh11.rotation.x = rot; //Continuously rotate the mesh
  mesh11.rotation.y = rot;

  mesh12.rotation.x = 0; //Continuously rotate the mesh
  mesh12.rotation.y = 0;
```
