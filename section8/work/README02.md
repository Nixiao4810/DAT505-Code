## Section 8 - 02 ##
* the code is used to load mode and when your mouse move to the mode , the mode's color will change at random.

#### Usage ####

```javascript
<script src="build/three.min.js"></script>

<script src="build/OBJLoader.js"></script>

<script src="build/MTLLoader.js"></script>
```

* load the mode and it's material,then set the size in the interval(400-200).

```javascript
var mtlLoader = new THREE.MTLLoader();
mtlLoader.load("Blocks.mtl", function(materials){

  materials.preload();

  var objLoader = new THREE.OBJLoader();
  objLoader.setMaterials(materials);

    objLoader.load("dragon.obj", function(mesh){
      mesh.traverse(function(node){
        if( node instanceof THREE.Mesh ){
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
      var sizeRand = Math.random() * 20;
      mesh.scale.set(sizeRand,sizeRand,sizeRand);
      mesh.position.set(Math.random()*400-200, Math.random()*400-200, Math.random()*400-200);
      mesh.rotation.y = -Math.PI/Math.random()*4;

      scene.add(mesh);
      objects.push(mesh); //Add to the array so that we can access for raycasting
      });
      });
      }
```

* change color when mouse move to the mode.

```javascript
if ( intersects.length > 0 ) {
  if ( INTERSECTED != intersects[ 0 ].object ) {
    if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    INTERSECTED = intersects[ 0 ].object;
    INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    INTERSECTED.material.emissive.setHex( Math.random()*0xff0000 );
  }
} else {
  if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
  INTERSECTED = null;
}
   renderer.render( scene, camera );
}
```

![effect](/section8/work/A.jpg)
