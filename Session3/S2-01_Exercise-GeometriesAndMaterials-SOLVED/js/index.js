// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
camera.target = new THREE.Vector3( -1000, 0, 0 )
// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#5A8296");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.BoxGeometry(100, 100, 100);
var geometry2 = new THREE.BoxGeometry(12500, 5700, -12500);
var geometry3 = new THREE.BoxGeometry(500, 10, 500);

// MATERIAL 1:
//var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//MATERIAL 2:
//var material = new THREE.MeshNormalMaterial();

//MATERIAL 3:
/*
var material = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});
*/
var texture = new THREE.TextureLoader().load('textures/demo4.jpg');
var material2 = new THREE.MeshBasicMaterial({map : texture});

var texture2 = new THREE.TextureLoader().load('textures/demo5.jpg');
var material3 = new THREE.MeshBasicMaterial({map : texture2});

//MATERIAL 5 (non-shiny material):


var material = new THREE.MeshPhongMaterial({
  color: '#EA0000',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: '#F75000',
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null,
  shininess: 120,
  transparent: true,
  opacity: 0.25
});



/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
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
*/

/*
//MATERIAL 6 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
*/

/*
//MATERIAL 7 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
*/

var mesh1 = new THREE.Mesh( geometry, material );
mesh1.position.z = -1000;
mesh1.position.y = 100;



var mesh6 = new THREE.Mesh( geometry3, material3 );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -200;


var mesh7 = new THREE.Mesh( geometry2, material2 );
mesh7.position.z = -1000;
mesh7.position.x = 0;
mesh7.position.y = 0;


// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh6 );
scene.add( mesh7 );


var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh6.rotation.x = 0; //Continuously rotate the mesh
  mesh6.rotation.y = 0;

  mesh7.rotation.x = 0; //Continuously rotate the mesh
  mesh7.rotation.y = rot+1;

  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
