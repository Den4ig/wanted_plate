import Page from '../Page/Page'
import styles from "./Papers.module.css";

export default function Papers({ currentPage=null, numOfPaperPages=null }){
    return(
        <div className={styles.book}>
            {Array.from(
                { length: numOfPaperPages }, (_, index) => ( // Page number
                    <Page  
                        key={index} 
                        isFlipped={index < currentPage}   // Is page already flipped or not
                        style={{
                            zIndex: 
                            index < currentPage 
                                ? index + 1
                                : index === currentPage
                                ? numOfPaperPages + 1
                                : numOfPaperPages - index

                        }}
                    /> 
                )   
            )}
        </div>
    );
}

