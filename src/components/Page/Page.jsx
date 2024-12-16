import { useContext } from "react";
import { FolderContext } from "../../App";
// Styles
import styles from "./Page.module.css";

export default function Page({ isFlipped=null, style=null }){

    const { isFolderOpened } = useContext(FolderContext);

    const flippedOrNot = () => {            // Closing all pages if we close folder
        if(isFolderOpened) {
            return styles.page;
        } else {
            return `${styles.page} ${isFlipped ? styles.flipped : ""}`
        }
    }

    return( 
        <div className={flippedOrNot()} style={style}>
            <div className={styles.page_front}>
                <div className={styles.front_content}></div>
            </div>
            <div className={styles.page_back}>
                <div className={styles.back_content}></div>
            </div>
        </div>
    );
}
