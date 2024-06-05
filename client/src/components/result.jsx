
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Screenshot from './screenshot';
const Result = () => {
  const percentage = 30;

  return (
    <div className='result-container'>
      <h1 className='result-title'>Result</h1>
      <div className='result-bar'>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <span>Performance</span>
        </a>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <span>Accesibility</span>
        </a>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <span>Best practices</span>

        </a>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <span>SEO</span>
        </a>
      </div>
      <Screenshot />
    </div>
  );
}

export default Result;
