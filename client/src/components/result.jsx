import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import screenShot from '/screen.png';
import { MdErrorOutline } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { FaCheckDouble } from "react-icons/fa";

const Result = () => {
  const percentage = 30;
  const percentage2 = 100;
  const percentage3 = 70;
  const percentage4 = 100;

  return (
    <div className='result-container'>
      <h1 className='result-title'>Result</h1>
      <div className='result-bar'>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <span>Performance</span>
        </a>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
          <span>Accesibility</span>
        </a>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
          <span>Best practices</span>

        </a>
        <a className='progress-container' href='./'>
          <CircularProgressbar value={percentage4} text={`${percentage4}%`} />
          <span>SEO</span>
        </a>
      </div>
      <div className='performance-container'>
        <div className='performance-progress'>
          <h2 className='performance-title'>Performance</h2>
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
          <ul className='performance-ul'>
            <li className='performance-li' id='li1'>
              <MdErrorOutline />
              0 - 49
            </li>
            <li className='performance-li' id='li2'>
              <BiError />
              50 - 89
            </li>
            <li className='performance-li' id='li3'>
              <FaCheckDouble />
              90 - 100</li>
          </ul>
        </div>
        <img className='screenshot-img' alt="screenShot of the url page" src={screenShot} />
      </div>
    </div>
  );
}

export default Result;
