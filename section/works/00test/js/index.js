//Global variables

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


init();
geometry();
render();
