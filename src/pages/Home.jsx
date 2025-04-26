import styles from '../styles/Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate(); // ✅ initialize navigate

  const handleClick = () => {
    console.log("clicked");
    navigate('/selections'); // ✅ or whatever your next route is
  };

  return (
    <div className={styles.main}>
      <div className={styles.titleDiv}>
        <h1>What’s Your Perfect Send-Off?</h1>
        <h3>Discover the Best After-Death Options for You</h3>
      </div>
      <div className={styles.buttonsDiv}>
        <button className={styles.button} onClick={handleClick}>
          <span>Continue</span>
        </button>
      </div>
    </div>
  );
}
