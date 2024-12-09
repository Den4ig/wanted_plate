export default function FolderPage({flipped, children, zIndex, folderTransition }) {
    return(
        <div className="folder-page" style={{zIndex: zIndex, transition: folderTransition}}>

            <div className={flipped}>
                {children}
            </div>

        </div>
    );
}