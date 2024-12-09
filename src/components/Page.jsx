export default function Papers({ isFlipped }){
    return(
        <div className={`page ${isFlipped ? "flipped" : ""}`}>
            <div className="page-front">
                <div className="front-content"></div>
            </div>
            <div className="page-back">
                <div className="back-content"></div>
            </div>
        </div>
    );
}