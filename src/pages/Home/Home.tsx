import React from 'react';
import styles from './Home.module.css';
import { device } from '../../styles';
import { useMediaQuery } from '../../hooks';
import { Button } from '../../components';

const Home: React.FC = () => {
  const isTablet = useMediaQuery(device.tablet);
  const isDesktop = useMediaQuery(device.desktop);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our App</h1>
      <p className={styles.subtitle}>
        Is it a start of our LMS?
        No, but actually yes, it's an example of project structure.
      </p>
      
      <div className={styles.buttonContainer}>
        <Button variant="primary" fullWidth={true}>Get Started</Button>
        <Button variant="outline" fullWidth={true}>Learn More</Button>
      </div>
      
      {/* Conditional rendering based on screen size */}
      {isDesktop && (
        <p className={`${styles.screenMessage} ${styles.desktopMessage}`}>
          This content only appears on desktop screens.
        </p>
      )}
      
      {isTablet && !isDesktop && (
        <p className={`${styles.screenMessage} ${styles.tabletMessage}`}>
          This content only appears on tablet screens.
        </p>
      )}
      
      {!isTablet && (
        <p className={`${styles.screenMessage} ${styles.mobileMessage}`}>
          This content only appears on mobile screens.
        </p>
      )}
    </div>
  );
};

export default Home; 