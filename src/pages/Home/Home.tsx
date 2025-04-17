import React, { useState } from "react";
import styles from "./Home.module.css";
import { device } from "../../styles";
import {
  useMediaQuery,
  useCounter,
  useDocumentTitle,
  useThemeContext,
  usePrevious,
  ThemeProvider,
} from "../../hooks";
import { Button } from "../../components";

const CounterExample = () => {
  const { count, increment, decrement, reset } = useCounter(0);
  const prevCount = usePrevious(count);
  return (
    <div style={{ marginBottom: 24 }}>
      <h2>useCounter & usePrevious Example</h2>
      <p>
        Current: {count} | Previous: {prevCount ?? "-"}
      </p>
      <Button variant="primary" onClick={increment}>
        +1
      </Button>
      <Button variant="outline" onClick={decrement} style={{ marginLeft: 8 }}>
        -1
      </Button>
      <Button variant="outline" onClick={reset} style={{ marginLeft: 8 }}>
        Reset
      </Button>
    </div>
  );
};

const DocumentTitleExample = () => {
  const [title, setTitle] = useState("");
  useDocumentTitle(title || "React Personal Test");
  return (
    <div style={{ marginBottom: 24 }}>
      <h2>useDocumentTitle Example</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type to set document title..."
        style={{ padding: 4, width: 240 }}
      />
    </div>
  );
};

const ThemeExample = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div style={{ marginBottom: 24 }}>
      <h2>useContext Example (Theme)</h2>
      <p>
        Current theme: <b>{theme}</b>
      </p>
      <Button variant="primary" onClick={toggleTheme}>
        Toggle Theme
      </Button>
    </div>
  );
};

const Home: React.FC = () => {
  const isTablet = useMediaQuery(device.tablet);
  const isDesktop = useMediaQuery(device.desktop);

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Our App</h1>
        <p className={styles.subtitle}>
          Is it a start of our test project? No, but actually yes, it's an
          example of project structure.
        </p>

        <CounterExample />
        <DocumentTitleExample />
        <ThemeExample />

        <div className={styles.buttonContainer}>
          <Button variant="primary" fullWidth={true}>
            Get Started
          </Button>
          <Button variant="outline" fullWidth={true}>
            Learn More
          </Button>
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
    </ThemeProvider>
  );
};

export default Home;
