import style from "./style.module.css"

const Button = ({ children, ...props }) => {
    const totalHeight = document.documentElement.scrollHeight;
    const cardPosition = totalHeight / 3.175;

    const scrollToTarget = () => {
        window.scrollTo({
            top: cardPosition,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <button onClick={scrollToTarget} {...props} className={style.button}>{children}</button>
        </>
    )
}

export default Button;