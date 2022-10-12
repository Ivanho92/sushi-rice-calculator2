import { useContext } from "react";
import { QuantitiesContext } from "../store/quantities-context";

import styles from "./QuantitiesTable.module.css";

const QuantitiesTable = () => {
    const { quantities, parameters, setParameters, setIsRiceInputMaster } = useContext(QuantitiesContext);

    const riceInputChangeHandler = e => {
        setIsRiceInputMaster(true);
        setParameters((prevParameters) => {
            let value = e.target.value;

            if (value > 999999) {
                value = 999999;
            }

            if (value < 0) {
                value = 0;
            }

            return {
                ...prevParameters,
                riceQuantity: value,
            };
        });
    }

    return (
        <div className={styles["table-container"]}>
            <table>
                <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Ingredient</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="flex">
                        <td className={styles.quantity}>
                            <div className={styles["rice-quantity"]}>
                                <input
                                    className={styles["rice-quantity-input"]}
                                    id="rice-quantity"
                                    type="number"
                                    min="1"
                                    max="999"
                                    value={quantities.rice}
                                    onChange={riceInputChangeHandler}
                                />
                                <label htmlFor="rice-quantity" className={styles.units}>{parameters.units === "metric" ? "g" : "cup"}</label>
                            </div>
                        </td>
                        <td>Rice</td>
                    </tr>
                    <tr className="flex">
                        <td className={styles.quantity}>
                            <span>{quantities.water}</span>
                            <span className={styles.units}>{parameters.units === "metric" ? "ml" : "cup"}</span>
                        </td>
                        <td>Water</td>
                    </tr>
                    <tr className="flex">
                        <td className={styles.quantity}>
                            <span>{quantities.riceVinegar}</span>
                            <span className={styles.units}>{parameters.units === "metric" ? "ml" : "tablespoon"}</span>
                        </td>
                        <td>Rice Vinegar</td>
                    </tr>
                    <tr className="flex">
                        <td className={styles.quantity}>
                            <span>{quantities.sugar}</span>
                            <span className={styles.units}>{parameters.units === "metric" ? "g" : "tablespoon"}</span>
                        </td>
                        <td>Sugar</td>
                    </tr>
                    <tr className="flex">
                        <td className={styles.quantity}>
                            <span>{quantities.salt}</span>
                            <span className={styles.units}>{parameters.units === "metric" ? "g" : "teaspoon"}</span>
                        </td>
                        <td>Salt</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default QuantitiesTable;
