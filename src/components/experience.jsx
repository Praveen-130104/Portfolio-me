import React,{useRef} from 'react';
import { motion,useScroll } from 'framer-motion';
const Details = ({position, company, companyLink,time,address,work}) => {
    return (
        <li className='my-7  ' 
        style={{width:'60%'}}>
            <div>
                <h3 className='hd'>
                    <span className=''>{position}&nbsp; ,</span>
                    <span className='clr-green mont'> {company}</span>
                </h3>
                <span className='dh mont'>{time} | {address}</span>
                <p className='work'>{work}</p>
            </div>
        </li>
    );
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    );
    return (
        <div className='my-0'>
            <h2 className='text-center rokkit edu clr-teal'
             style={{fontSize:'4.5rem'}}>Education</h2>
            <div ref={ref} className="w-75 mx-auto position-relative">

                <motion.div 
                style={{scaleY:scrollYProgress}}  className=' hr left-0 w-1 h-100 bg-dark origin-top my-4'/>

                <ul className='d-flex flex-column mx-5 align-items-start justify-content-between my-4 '>
                    <li>
                        <Details
                            position='Student'
                            company='Bharathi Matriculation Higher Secondary School'
                            time='May 2018 - 2019'
                            address='Coimbatore, India'
                            work='Completed my 10 th class with 94.4% in Bharathi Matriculation Higher Secondary School, Coimbatore, India.'
                        />
                        <Details
                            position='Student'
                            company='Bharathi Matriculation Higher Secondary School'
                            time='May 2020 - 2021'
                            address='Coimbatore, India'
                            work='Completed my 12 th class with 91.5% in Bharathi Matriculation Higher Secondary School, Coimbatore, India.'
                        />
                        
                        <Details
                            position='Student'
                            company='Sri Krishna College of Engineering and Technology'
                            time='NOV 2021 - Present'
                            address='Coimbatore, India'
                            work='Currently doing my undergraduate in Electonics and Computer Engineering at Sri Krishna College of Engineering and Technology '
                        />
                        <Details
                            position='Sales Person'
                            company='Cake Bee'
                            time='June 2022 - Sep 2022'
                            address='Coimbatore, India'
                            work='Worked as a Part-time sales person in Cake BEE shop '
                        />
                        <Details
                            position='Student'
                            company='Sri Krishna College of Engineering and Technology'
                            time='NOV 2021 - Present'
                            address='Coimbatore, India'
                            work='Currently doing my undergraduate in Electonics and Computer Engineering at Sri Krishna College of Engineering and Technology '
                        />
                        <Details
                            position='Student'
                            company='Sri Krishna College of Engineering and Technology'
                            time='NOV 2021 - Present'
                            address='Coimbatore, India'
                            work='Currently doing my undergraduate in Electonics and Computer Engineering at Sri Krishna College of Engineering and Technology '
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Experience;