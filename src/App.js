import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { ScrollToTop } from "./components/layout/ScrollToTop/ScrollToTop";

import "normalize.css";
import styles from "./App.css";

function App() {
  return (
    <div className={styles["app"]}>
      <Header />
      <Main />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
