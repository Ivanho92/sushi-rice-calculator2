import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={styles.intro + " | stack box"}>
            <p>Insert the parameters to determine the quantities for a perfect sushi rice!</p>
            <p>You can also overwrite the parameters and manually type in the rice quantity in the appropriate field!</p>
        </div>
    );
};

export default Intro;
