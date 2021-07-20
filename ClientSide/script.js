
import * as THREE from '/three/build/three.module.js';
import { Particle } from '/Particles/Particle.js'
import { Physics } from '/Physics/physics.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const physics = new Physics();

scene.background = new THREE.Color( 0xffffff );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let clock = new THREE.Clock();


const geometry = new THREE.BoxBufferGeometry(100, 100, 10, 50, 50, 50)

const material = new THREE.ShaderMaterial(
{
    uniforms: {
      t: {type: "t", value: new THREE.TextureLoader().load('img.png')},
      uMouse: { type: "v2", value: new THREE.Vector2(0, 0)},
      time: {type: "f", value: 0.0}
    },
    vertexShader: vertex,
    fragmentShader: fragment,
})


const mesh = new THREE.Points( geometry, material );

camera.position.z = 265;

scene.add( mesh );

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let x = 0;
let y = 0;

function onMouseMove( event ) {

	// calculate mouse position in normalized device coordinates
	// (-1 to +1) for both components

	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  x = event.clientX /// window.innerWidth;
  y = window.innerHeight - event.clientY;
  //material.uniforms.uMouse.value = new THREE.Vector2(event.clientX, event.clientY);
}

document.addEventListener('mousemove', onMouseMove);

/*

const p1 = new Particle(12);
const p2 = new Particle(5);

//p1.mesh.position.x = -5
p2.mesh.position.x = 2
p2.mesh.position.y = 5
//p2.mesh.position.z = 5

physics.addObjects([p1, p2]);
//console.log(physics)

scene.add( p1.mesh, p2.mesh );

//camera.position.z = 100.5;
camera.position.z = 35;

document.addEventListener('mousemove', (e) => {
  //p1.mesh.position.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  //p1.mesh.position.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  p1.mesh.position.x = event.clientX / window.innerWidth * 5
  p1.mesh.position.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
})
*/
const animate = function () {
  requestAnimationFrame( animate );
    material.uniforms.time.value += 0.1;
    material.uniforms.uMouse.value = new THREE.Vector2(x, y);
/*
  // update the picking ray with the camera and mouse position
  raycaster.setFromCamera( mouse, camera );

  // calculate objects intersecting the picking ray
  const intersects = raycaster.intersectObjects( scene.children );

  for ( let i = 0; i < intersects.length; i ++ ) {

    if(intersects[0])
    {
      intersects[0].object.material.uniforms.uMouse.value = new THREE.Vector2(intersects[0].point.x, intersects[0].point.y);
    }

  }
*/
  //physics.gravityForce();
  //physics.update();
  //mesh.rotation.y += 0.01
  geometry.attributes.position.needsUpdate = true; // required after the first render
  //p1.geometry.attributes.position.needsUpdate = true; // required after the first render
  //p2.geometry.attributes.position.needsUpdate = true; // required after the first render
  material.needsUpdate = true
  renderer.render( scene, camera );
};

animate()
