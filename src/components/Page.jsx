export default function Page({ isFlipped=null }){
    return(
        <div className={`page ${isFlipped ? "flipped" : ""}`}>
            <div className="page_front">
                <div className="front_content"></div>
            </div>
            <div className="page_back">
                <div className="back_content"></div>
            </div>
        </div>
    );
}