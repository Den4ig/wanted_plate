import Page from '../Page/Page'
import styles from "./Papers.module.css";

export default function Papers({ currentPage=null, numOfPaperPages=null }){
    return(
        <div className={styles.book}>
            {Array.from(
                { length: numOfPaperPages }, (_, index) => ( // Page number
                <Page key={index} isFlipped={index < currentPage} style={{zIndex: !currentPage}}/> // Is page already flipped or not
            )
        )}
        </div>
    );
}