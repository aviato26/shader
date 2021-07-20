
let vertex =
`
uniform vec2 uMouse;
uniform float time;
varying vec2 vUv;

void main()
{
      vUv = uv;
      vec3 newpos = position;
      vec3 curpos = position;

      //newpos.x += time;

      //float mouseRadius = 0.5;
      float dist = distance(curpos.xy, uMouse);
      float distSquared = sqrt(dist);
      float strength = 1000.0 / dist;
      float len = length(strength);
      curpos += len;
      newpos += curpos;

    //vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 mvPosition = modelViewMatrix * vec4(newpos, 1.0);

    gl_Position = projectionMatrix * mvPosition;
    gl_PointSize = 6.0;
}

`
