import QuantitiesContextProvider from "./store/quantities-context";

import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";

import style from "./App.module.css";

const App = () => {
    return (
        <div className={style.app}>
            <Header />
            <QuantitiesContextProvider>
                <Main />
            </QuantitiesContextProvider>
            <Footer />
        </div>
    );
};

export default App;
