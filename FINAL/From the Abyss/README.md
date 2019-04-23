# Final Work #

## From the Abyss ##
### Xiao Ni B161006074 ###

#### links ####

[Final Work](https://github.com/Nixiao4810/DAT505-Code/tree/master/FINAL)

#### screen composition ####
![screen composition](/FINAL/From the Abyss/111.png)
![screen composition](/FINAL/From the Abyss/2.png)
![screen composition](/FINAL/From the Abyss/3.png)
![screen composition](/FINAL/From the Abyss/4.png)




#### Description ####
* I want to create a kind of feeling that the devil slowly emerges from hell,
so I made a horrible model as the main part of this porject，and a strange background that constantly changes can increase the horror atmosphere of the whole
work.Background music I borrowed the soundtrack of Heroes of Might and Magic V, which is the exclusive music of Undead forces.


#### Catalogue ####
* Final
 * MACOSX
 * From the Abyss
  * audio
   * City0.mp3
  * build
   * MTLLoader.js
   * OBJLoader.JS
   * THREE.MIN.JS
  * css
   * style.css
  * js
 * .DS_Store
 * 111.png
 * Alien_Muscle_001_COLOR.jpg
 * bone.mtl
 * bone.obj
 * index.html
 * README.md


#### Usage ####
```javascript
<div id="canvas"></div>
<script src="build/three.min.js"></script>
<script src="build/OBJLoader.js"></script>
<script src="build/MTLLoader.js"></script>
<script src="js/OrbitControls.js"></script>
<script src="js/index.js"></script>

```



```javascript

var renderer, scene, camera;
var controls;

var object;
var objects = [];
var rot = 0;
```

* Define the scene and the basic content of the scene

```javascript
scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x3CB371,700,800);
scene.background = new THREE.Color( 0x3CB371 );
```

* Define the scene and add fog.

```javascript
var geometry = new THREE. SphereGeometry(-600, 100, 100);

var texture = new THREE.TextureLoader().load('Alien_Muscle_001_COLOR.jpg');
var material = new THREE.MeshBasicMaterial( { map : texture } );

var mesh1 = new THREE.Mesh( geometry, material );
mesh1.position.z = 450;
mesh1.position.x = 0;
mesh1.position.y = 55;
mesh1.rotation.y = rot + 1;

scene.add(mesh1);

```

* Define the skybox.

```javascript
var W = window.innerWidth,
    H = window.innerHeight;

camera = new THREE.PerspectiveCamera(45, W / H, .1, 20000);
camera.position.set(0, 55, 850);
camera.lookAt(scene.position);
```
* Add Camera

```javascript
var sound = new THREE.Audio( listener );

var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'audio/City0.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    sound.play();
});
```
* Add background music and set specific parameters.

```javascript
controls = new THREE.OrbitControls(camera, renderer.domElement);
(...)
document.body.appendChild(renderer.domElement);

```

* control the mousemove

```javascript

for (var i=0; i<1; i++){

var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("bone.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("bone.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      mesh.scale.set( 200, 200, 200);

      scene.add(mesh);
      objects.push(mesh);
    });
  });
}
```

* Load external models and texture files

```javascript
function drawFrame(){
  requestAnimationFrame(drawFrame);


  rot += 0.1;

  mesh1.rotation.y = rot+1;

  renderer.render(scene, camera);
}

drawFrame();
```

* Control object motion

### Borrowing table ###
* City0.mp3----- Heroes of Might and Magic V - City Theme - Necropolis
