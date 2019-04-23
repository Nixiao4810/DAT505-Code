var renderer, scene, camera;
var controls;

var object;
var objects = [];
var rot = 0;


function init() {
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x3CB371,700,800);
  scene.background = new THREE.Color( 0x3CB371 );

  var geometry = new THREE. SphereGeometry(-600, 100, 100);

  var texture = new THREE.TextureLoader().load('Alien_Muscle_001_COLOR.jpg');
  var material = new THREE.MeshBasicMaterial( { map : texture } );

  var mesh1 = new THREE.Mesh( geometry, material );
  mesh1.position.z = 450;
  mesh1.position.x = 0;
  mesh1.position.y = 55;
  mesh1.rotation.y = rot + 1;

  scene.add(mesh1);

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 20000);
  camera.position.set(0, 55, 850);
  camera.lookAt(scene.position);


  var listener = new THREE.AudioListener();
  camera.add( listener );

  var sound = new THREE.Audio( listener );

  var audioLoader = new THREE.AudioLoader();
  audioLoader.load( 'audio/City0.mp3', function( buffer ) {
      sound.setBuffer( buffer );
      sound.setLoop( true );
      sound.setVolume( 0.5 );
      sound.play();
  });


  var spotLight = new THREE.SpotLight(0x8FBC8F);
  spotLight.position.set(-500, 1000, 0);
  scene.add(spotLight);


  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0,1000,0);
  ambLight.add(spotLight);
  scene.add(ambLight);


  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0xFFFFFF);
  renderer.setSize(W, H);

  controls = new THREE.OrbitControls(camera, renderer.domElement);


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

  document.body.appendChild(renderer.domElement);

  function drawFrame(){
    requestAnimationFrame(drawFrame);


    rot += 0.1;

    mesh1.rotation.y = rot+1;

    renderer.render(scene, camera);
  }

  drawFrame();

}


init();
