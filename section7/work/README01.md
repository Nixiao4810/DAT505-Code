## Section 7 - 01 ##
* This work can control cubes to drop down at random speed. And it can add
randomized local textures to the cubes in a interval.


#### Usage ####

```javascript
<script src="build/three.min.js"></script>
```


*  `for(let i=0; i<cubesNum; i++)` can define cubes'number, others can give each cube different speed.

```javascript
geometry = new THREE.BoxGeometry( 10, 10, 10 );

for(let i=0; i<cubesNum; i++){
  var randomValue = Math.random() * 0.5;
  speed.push(randomValue);
```

* give cubes random material from your local file, `(Math.random()*12) + 1`means
the textures will be randomized chosen from the first picture to the thirteenth picture.

```javascript
var randomSelection = Math.round(Math.random()*12) + 1;
// Load a texture
texture = new THREE.TextureLoader().load( "textures/texture"+randomSelection+".jpg" );
```

* give cubes intial angular velocity.`cubes[i].position.y -= speed[i];`can make cubes drop down.

```javascript
for (var i=0; i<cubesNum; i++){
  cubes[i].rotation.x += speed[i] / 100;
  cubes[i].rotation.y += speed[i] / 80;
  cubes[i].position.y -= speed[i];
```

* set cubes' initial position and size.
```javascript
if (cubes[i].position.y<-30) {
  cubes[i].position.y = 35;
  cubes[i].position.x = (Math.random() * -20) +10;
  cubes[i].scale.x = Math.random();
  cubes[i].scale.y = Math.random();
  cubes[i].scale.z = Math.random();
  ```
