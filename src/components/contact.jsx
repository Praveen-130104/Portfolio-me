import React from 'react';
import Social from './media';
import Navbar from './navbar';
export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="container" style={{ height: '100%' }}>
                <div className="d-flex flex-column justify-content-between">
                    <h1 className='clr-teal rokkit con text-center'>CONTACT;</h1>
                    <div className="d-flex justify-content-around ">
                        <button className="btn btn-success m-2  bg-green">Hire Me</button>

                        <button className="btn btn-success m-2 bg-green">Download CV</button>
                    </div>
                    <div className="my-5">
                        <Social />
                    </div>

                </div>


                {/* <div className="text-center">
                    <h1 className="clr-teal signup p-3">SIGNUP FOR MY NEWSLETTER</h1>
                    
                    <div className="d-flex flex-column ">
                        <label className="form-label ">Name</label>
                        <input type="text" className="form-control w-50 text-center" placeholder="Enter your name" />
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control w-50 text-center" placeholder="Enter your email" />
                    </div>
                    <button type="submit" className="btn btn-dark m-2">Submit</button>

                </div> */}
                <div className="text-center d-flex flex-column justify-content-center align-items-center ">
                <h1 className="clr-teal signup p-3">SIGNUP FOR MY NEWSLETTER</h1>


                    <form className='w-50'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                       
                        <button type="submit" className="btn  btn-dark bg-dark  "><span className='text-white'>Submit</span></button>

                    </form>
                </div>



            </div>
        </>
    )
}
