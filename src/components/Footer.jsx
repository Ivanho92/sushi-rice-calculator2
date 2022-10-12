import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <p>
                    <span className="colored-text">
                        Sushi Rice Calculator<sup>&copy;</sup>
                    </span>{" "}
                    by <a href="https://ivan-rodrigues.com">Ivan Rodrigues</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
