import styles from "./Page.module.css";

export default function Page({ isFlipped=null, style=null }){
    return( 
        <div className={`${styles.page} ${isFlipped ? styles.flipped : ""}`} style={style}>
            <div className={styles.page_front}>
                <div className={styles.front_content}></div>
            </div>
            <div className={styles.page_back}>
                <div className={styles.back_content}></div>
            </div>
        </div>
    );
}