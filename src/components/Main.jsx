import { useContext } from "react";
import { QuantitiesContext } from "../store/quantities-context";

import Intro from "./Intro";
import styles from "./Main.module.css";
import QuantitiesTable from "./QuantitiesTable";

const Main = () => {
    const { parameters, setParameters, setIsRiceInputMaster } = useContext(QuantitiesContext);

    const peopleChangeHandler = (e) => {
        setIsRiceInputMaster(false);
        setParameters((prevParameters) => {
            let value = e.target.value;

            if (value > 999) {
                value = 999;
            }

            if (value < 0) {
                value = 0;
            }

            return {
                ...prevParameters,
                people: value,
                riceQuantity: null
            };
        });
    };

    const riceTypeChangeHandler = (e) => {
        setIsRiceInputMaster(false);
        setParameters((prevParameters) => ({
            ...prevParameters,
            riceType: e.target.value,
            riceQuantity: null
        }));
    };

    const unitsChangeHandler = (e) => {
        setIsRiceInputMaster(false);
        setParameters((prevParameters) => ({
            ...prevParameters,
            units: e.target.value,
            riceQuantity: null
        }));
    };
 
    return (
        <div className={styles.main + " stack container"}>
            <div className={styles["main-bg"] + " | stack box"}>
                <div className={styles["form-group"]}>
                    <label htmlFor="people">How many people</label>
                    <input className={styles["people-input"]} id="people" type="number" min="1" max="999" value={parameters.people} onInput={peopleChangeHandler} />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="rice-type">Type of rice</label>
                    <select id="rice-type" onChange={riceTypeChangeHandler} value={parameters.riceType}>
                        <option value="sushi">Sushi</option>
                        <option value="long-grain-white">Long grain white</option>
                        <option value="medium-grain-white">Medium grain white</option>
                        <option value="short-grain-white">Short grain white</option>
                        <option value="long-grain-brown">Brown</option>
                        <option value="parboiled">Parboiled</option>
                        <option value="basmati">Basmati</option>
                        <option value="jasmine">Jasmine</option>
                        <option value="quinoa">Quinoa</option>

                        {/* 
                        "sushi": 1.1,
        "long-grain-white": 1.75,
        "medium-grain-white": 1.5,
        "short-grain-white": 1.5,
        "long-grain-brown": 2.25,
        "parboiled": 1.2,
        "basmati": 1.5,
        "jasmine": 1.5,
        "quinoa": 1.2, */}
                    </select>
                </div>

                <QuantitiesTable />

                <div className={styles["form-group"]}>
                    <label htmlFor="units">Units</label>
                    <select id="units" onChange={unitsChangeHandler} value={parameters.units}>
                        <option value="metric">Metric</option>
                        <option value="cups">Cups</option>
                    </select>
                </div>
            </div>

            <Intro />
        </div>
    );
};

export default Main;
