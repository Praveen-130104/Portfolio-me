import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Navbar from './navbar';
import 'animate.css';
import Social from './media';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sphere,MeshDistortMaterial } from '@react-three/drei';


const Img = styled.img`
width:600px;
height:400px;
object-fit:contain;
position:absolute;
inset:0;
z-index :0;
margin:auto;
`
function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Options for typed.js
    const options = {
      strings: ['Web Developer', 'Frontend Developer', 'UI/UX Designer'],
      typeSpeed: 50, // Speed of typing in milliseconds
      backSpeed: 50, // Speed of deleting in milliseconds
      loop: true, // Loop the typing animation
      showCursor: false, // Hide the cursor
    };

    // Create a new instance of Typed
    const typed = new Typed(typedRef.current, options);

    // Clean up on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={{height:'100vh'}}>
      <Navbar />
      <div className="container  d-flex home align-items-center justify-content-start ">
        <div className="img-fluid  mr-5 d-none right d-sm-block " style={{ width: '40vw' ,height:'70vh'}}>
           <Canvas >
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]}  />
            <Sphere args={[1,100,200]} scale={3}>
            <MeshDistortMaterial 
            color="#709775"
            attach="material"
            distort={0.5}
            speed={2}
            />
            </Sphere>
          </Canvas>
        <Img src='src\assets\me-png.png' />

          
        </div>
        
        <div
          className="d-flex mx-5  flex-column justify-content-start"
          style={{ width: '50vw' }}
        >
          <div className="py-3 ">
            <h1 className="head-txt tamil">வணக்கம்!</h1>
            <h1 className="head-txt">I'm Praveen</h1>
            <h1 className="head-txt" >I'm a <span ref={typedRef} className='clr-teal'></span> </h1>
          </div>
          <h3 className="head-text mont">
            Creating digital experiences that captivate and inspire.
          </h3>
          <p className="my-3 mont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint soluta
            officia officiis voluptatum unde quas incidunt laudantium non saepe
            mollitia aliquid expedita sapiente amet iste, doloremque similique!
            Vel, accusamus maiores.
          </p>
          <div className="mb-5">
            <button className="btn btn-dark">
              Resume
              <i className="fa px-2 fa-arrow-up-right-from-square"></i>
            </button>
            <a className="underline mx-2 ">Contact</a>
          </div>
          <Social/>
        </div>
      </div>
    </div>
  );
}

export default Home;
