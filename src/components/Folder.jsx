import FolderPage from "./FolderPage";
import Papers from "./Papers";
import PageButtons from "./PageButtons";

export default function Folder({flipped, folderFlip, buttonStyle}) {
	return (
		<div className="folder_bg">

			 <PageButtons buttonStyle={buttonStyle[0]}/>    {/*Button for page flipping */}

			<div className={folderFlip}>
				<FolderPage flipped={flipped}/>             {/*Folder pages */}
				<FolderPage flipped={""}>
					<Papers/>
				</FolderPage>
			</div>

			<PageButtons  buttonStyle={buttonStyle[1]}/>    {/*Button for page flipping */}

		</div>
	);
}
