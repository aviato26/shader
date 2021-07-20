
import * as THREE from '/three/build/three.module.js';

export class Particle
{
  constructor(mass)
  {
    this.geometry = new THREE.SphereGeometry(1, 32, 32);;
    this.material = new THREE.MeshBasicMaterial( { color: 0x000000} );;
    this.mesh = new THREE.Mesh( this.geometry, this.material );;
    this.mass = mass;
  }
}
