import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../assets/projectImg.png';
import GreenCtgImg from '../assets/greenctg.jpg';
import CoinTrackerImg from '../assets/cointracker.jpg';
import CavinImg from '../assets/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Rock Paper Scissor',
    desc:
      'A simple Rock Paper Scissor game made with HTML,CSS,JAVASCRIPT',
    // img: ,
  },
  {
    id: uuidv4(),
    name: 'Portfolio',
    desc:
      'My first PortFolio made with HTML,CSS,JAVASCRIPT',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'CAFFEINE CREW',
    desc:
      'A website for a coffee shop. Made with ReactJs ',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  },
];

export default projects;
