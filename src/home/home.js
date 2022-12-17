import Feature from './feature';
import Stats from './stats';
import Section from './section';
import Intro from './intro';
import './home.css';

function Home() {
  return (
    <>
    <div className='main-home'>
      <Section/>
      <Stats/>
      <Intro/>
      <Feature/>
    </div>
    </>
  );
}

export default Home;
