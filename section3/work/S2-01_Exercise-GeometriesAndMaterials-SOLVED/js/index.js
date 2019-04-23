
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
camera.target = new THREE.Vector3( -1000, 0, 0 )
var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#5A8296");

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);



var geometry = new THREE.BoxGeometry(100, 100, 100);
var geometry2 = new THREE.BoxGeometry(12500, 5700, -12500);
var geometry3 = new THREE.BoxGeometry(500, 10, 500);



var texture = new THREE.TextureLoader().load('textures/demo4.jpg');
var material2 = new THREE.MeshBasicMaterial({map : texture});

var texture2 = new THREE.TextureLoader().load('textures/demo5.jpg');
var material3 = new THREE.MeshBasicMaterial({map : texture2});



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



scene.add( mesh1 );
scene.add( mesh6 );
scene.add( mesh7 );


var rot = 0;

var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1;
  mesh1.rotation.y = rot+1;

  mesh6.rotation.x = 0;
  mesh6.rotation.y = 0;

  mesh7.rotation.x = 0;
  mesh7.rotation.y = rot+1;

  renderer.render(scene, camera);
};

render();
