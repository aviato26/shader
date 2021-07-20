
import * as THREE from '/three/build/three.module.js';

export class Physics
{
  constructor()
  {
    this.gravityConstant = 0.3;
    this.objects = [];
    //this.direction = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    //this.acc = new THREE.Vector3();
    this.force = new THREE.Vector3();
    //this.magnitude = new THREE.Vector3();
  }

  addObjects(obj)
  {
    // adding objects to objects array
    this.objects.push(...obj);
  }

  update()
  {
    this.objects[1].mesh.position.add(this.vel);
    //this.vel.add(this.acc);
  }

  gravityForce()
  {
    let p1 = this.objects[0];
    let p2 = this.objects[1];
    let p1Mass = p1.mass;
    let p2Mass = p2.mass;

    this.force.subVectors(p1.mesh.position, p2.mesh.position).normalize();
    let d = Math.sqrt(((this.force.x * this.force.x) + (this.force.y * this.force.y) + (this.force.z * this.force.z)))
    let constrain = Math.max(Math.min(d, 1125), 125);
    //let strength = this.gravityConstant / constrain//this.gravityConstant / d;
    // gravity formula
    let strength = this.gravityConstant * ((p1Mass * p2Mass) / constrain);
    // setting the new
    this.force.setLength(strength);

    this.vel.add(this.force)
/*
    //let direction = p1.mesh.position.sub(p2.mesh.position);
    this.direction = this.direction.subVectors(p1.mesh.position, p2.mesh.position);
    let magnitude = p1.mesh.position.distanceToSquared(p2.mesh.position);
    //this.magnitude = this.magnitude.distanceToSquared(p2.mesh.position);
    //direction.clampLength(1, 10);
    //let vec = new THREE.Vector3(1, 1, 1);
    let constrain = Math.max(Math.min(magnitude, 145), 5);
    this.direction.normalize();
    let force = (this.gravityConstant * p1Mass * p2Mass) / (constrain * constrain);
    this.direction.multiplyScalar(force);
    //this.direction.divideScalar(p2Mass);
    //console.log(this.direction)
    //vec.multiplyScalar(force)
    //let apply = direction.divide(vec);
    p2.mesh.position.add(this.direction)
    //console.log(this.direction)
    //console.log(p1.mesh.position)
*/
    //let a = p1.mesh.position.add(p2.mesh.position);
    //console.log(a
    //console.log(p2.mesh.position)
    //console.log(p2.mesh.position)
    //console.log(direction.normalize())

    //console.log(apply, p2.mesh.position)
    //console.log(p2.mesh.position.add(apply))
/*
    for(let i = 0; i < this.objects.length; i++)
    {
    }
    */

  }
}
