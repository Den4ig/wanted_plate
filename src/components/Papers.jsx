import Page from './Page'

export default function Papers({ currentPage, numOfPaperPages }){
    return(
        <div className="book">
            {Array.from(
                { length: numOfPaperPages }, (_, index) => ( // Page number
        <Page key={index} isFlipped={index < currentPage} style={{zIndex: !currentPage}}/> // Is page already flipped or not
        )
        )}
        </div>
    );
}