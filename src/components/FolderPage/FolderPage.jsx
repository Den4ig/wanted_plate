import styles from "./FolderPage.module.css";

export default function FolderPage({flipped=null, children=null, zIndex=null, folderTransition=null }) {
    return(
        <div className={styles.folder_page} style={{zIndex, transition: folderTransition}}>

            <div className={flipped}>
                {children}
            </div>

        </div>
    );
}