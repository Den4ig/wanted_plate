export default function FolderPage({flipped, children}) {
    return(
        <div className="folder-page">

            <div className={flipped}>
                {children}
            </div>

        </div>
    );
}