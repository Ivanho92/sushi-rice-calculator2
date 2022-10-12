import styles from "./QuantitiesTable.module.css";

const QuantitiesTable = () => {
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
                        <td class={styles.quantity}>
                            <div className={styles["rice-quantity"]}>
                                <input
                                    className={styles["rice-quantity-input"]}
                                    id="rice-quantity"
                                    type="number"
                                    min="1"
                                    max="999"
                                    defaultValue="400"
                                />
                                <label htmlFor="rice-quantity">g</label>
                            </div>
                        </td>
                        <td>Rice</td>
                    </tr>
                    <tr className="flex">
                        <td class={styles.quantity}>
                            <span>400</span>
                            <span>ml</span>
                        </td>
                        <td>Water</td>
                    </tr>
                    <tr className="flex">
                        <td class={styles.quantity}>
                            <span>54</span>
                            <span>g</span>
                        </td>
                        <td>Rice Vinegar</td>
                    </tr>
                    <tr className="flex">
                        <td class={styles.quantity}>
                            <span>10</span>
                            <span>g</span>
                        </td>
                        <td>Sugar</td>
                    </tr>
                    <tr className="flex">
                        <td class={styles.quantity}>
                            <span>4</span>
                            <span>g</span>
                        </td>
                        <td>Salt</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default QuantitiesTable;
