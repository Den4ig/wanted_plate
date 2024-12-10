export default function PageButtons({ buttonStyle=null, movePage=null }) {

    return(
        <button className="page_button" style={buttonStyle} onClick={movePage}>

        </button>
    );
}