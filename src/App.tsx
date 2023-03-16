import { Parallax } from 'react-parallax';
import kep1 from '../src/img/1.jpg';
import kep2 from '../src/img/2.jpg';
import kep3 from '../src/img/3.jpg';

function App() {

  return (
    <div className='App'>
      <Parallax strength={600} bgImage={kep1}>
        <div className='content'>
          <div className='text-content'>ASD</div>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={kep2}>
        <div className='content'>
          <div className='text-content'>ASD</div>
        </div>
      </Parallax>
      <Parallax strength={600} bgImage={kep3}>
        <div className='content'>
          <div className='text-content'>ASD</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
