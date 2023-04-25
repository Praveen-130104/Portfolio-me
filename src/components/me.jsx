import React from 'react';


const Me = () => {
    return (
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
            <div className="flexed-divs p-5 rokkit" style={{ width: '30%' }}>
                <h1 className='abt-fnt text-end px-1'>part <span style={{ width: '20%', height: '20%' }}> &#10084;</span> </h1>
                <h1 className="abt-fnt  text-end">
                    <span className='clr-green' >&lt;</span>
                    <span className='clr-green' >Developer</span>
                    <span className='clr-green'>&gt;</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis, dolorem aliquam labore facere repellat, dolor, beatae dolore nemo eveniet ipsum modi nam quasi quisquam vero sit iure reiciendis est!</p>
            </div>
            <div className="flexed-divs  bg-secondary " style={{ width: '30%' }}>
                <img src="src\assets\me-png.png" alt="" />
            </div>
            <div className="flexed-divs p-5 rokkit" style={{ width: '30%' }}>
                <h1 className='abt-fnt text-start px-3'>part</h1>
                <h1 className="abt-fnt text-start px-1">
                    <span className='clr-green' >&lt;</span>
                    <span className='clr-green' >Coder</span>
                    <span className='clr-green'>&gt;</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo officiis, dolorem aliquam labore facere repellat, dolor, beatae dolore nemo eveniet ipsum modi nam quasi quisquam vero sit iure reiciendis est!</p>

            </div>
        </div>
    );
};

export default Me;
