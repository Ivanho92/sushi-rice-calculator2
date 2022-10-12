import style from "./App.module.css";

import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className={style.app}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;
