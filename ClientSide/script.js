
import * as THREE from '/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

scene.background = new THREE.Color( 0xffffff );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxBufferGeometry(100, 100, 10, 100, 100, 100)

const material = new THREE.RawShaderMaterial(
{
    uniforms: {
      t: {type: "t", value: new THREE.TextureLoader().load('img.png')}
    },
    vertexShader: vertex,
    fragmentShader: fragment,
})

const mesh = new THREE.Points( geometry, material );

scene.add( mesh );

camera.position.z = 100.5;

const animate = function () {
  requestAnimationFrame( animate );

  geometry.attributes.position.needsUpdate = true; // required after the first render
  material.needsUpdate = true
  renderer.render( scene, camera );
};

animate()
