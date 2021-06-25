

let fragment =
`
  uniform sampler2D t;
  precision mediump float;
  float one = 500.0;

  void main()
  {
      vec2 uvu = vec2(one, one);
      vec4 tt = texture2D(t, uvu);
      gl_FragColor = tt;
  }

`
      //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
