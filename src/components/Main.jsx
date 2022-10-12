import Intro from "./Intro";
import styles from "./Main.module.css";
import QuantitiesTable from "./QuantitiesTable";

const Main = () => {
    return (
        <div className={styles.main + " stack container"}>
            <Intro />

            <div className={styles["main-bg"] + " | stack box"}>
                <div className={styles["form-group"]}>
                    <label htmlFor="people">How many people</label>
                    <input id="people" type="number" min="1" max="999" defaultValue="1" />
                </div>

                <div className={styles["form-group"]}>
                    <label htmlFor="rice-type">Type of rice</label>
                    <select id="rice-type">
                        <option value="sushi">Sushi</option>
                        <option value="basmati">Basmati</option>
                        <option value="brown">Brown</option>
                    </select>
                </div>

                <QuantitiesTable />

                <div className={styles["form-group"]}>
                    <label htmlFor="units">Units</label>
                    <select id="units">
                        <option value="metric">Metric</option>
                        <option value="cups">Cups</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Main;
