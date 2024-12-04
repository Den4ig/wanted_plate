import FolderPage from "./FolderPage";

export default function Folder({flipped, folderFlip}) {
	return (
		<div className="folder_bg">
			<div className={folderFlip}>
				<FolderPage flipped={flipped}/>
				<FolderPage flipped={""}/>
			</div>
		</div>
	);
}
