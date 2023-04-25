import React, { useEffect } from 'react';
import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

const NeonCursorComponent = () => {
  const appRef = React.useRef(null);

  useEffect(() => {
    neonCursor({
      el: appRef.current, // Use the ref to the div element as the target element
      shaderPoints: 16,
      curvePoints: 80,
      curveLerp: 0.5,
      radius1: 5,
      radius2: 30,
      velocityTreshold: 10,
      sleepRadiusX: 100,
      sleepRadiusY: 100,
      sleepTimeCoefX: 0.0025,
      sleepTimeCoefY: 0.0025
    });
  }, []);

  return (
    <div ref={appRef}>
      <canvas></canvas>
    </div>
  );
}

export default NeonCursorComponent;
