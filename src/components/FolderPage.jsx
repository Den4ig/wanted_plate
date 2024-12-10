export default function FolderPage({flipped=null, children=null, zIndex=null, folderTransition=null }) {
    return(
        <div className="folder_page" style={{zIndex, transition: folderTransition}}>

            <div className={flipped}>
                {children}
            </div>

        </div>
    );
}