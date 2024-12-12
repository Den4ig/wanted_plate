import styles from "./PageButtons.module.css";

export default function PageButtons({ buttonStyle=null, movePage=null }) {

    return(
        <button className={styles.page_button} style={buttonStyle} onClick={movePage}>

        </button>
    );
}