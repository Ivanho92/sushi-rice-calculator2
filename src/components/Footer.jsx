import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className="container">
                <p>
                    <span className="colored-text">
                        Sushi Rice Calculator<sup>&copy;</sup>
                    </span>
                    <span>
                        {" "}by&nbsp;<a href="https://ivan-rodrigues.com">Ivan&nbsp;Rodrigues</a>
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Footer;
