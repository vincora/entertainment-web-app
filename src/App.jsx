import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";
import Navbar from "./widgets/navbar/Navbar";
import Searchbar from "./widgets/search/Searchbar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.layout}>
        <div className={styles.searchbar}>
          <Searchbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
