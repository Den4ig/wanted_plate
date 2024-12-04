import { useState } from "react";
import Folder from "./components/Folder";
import FolderButtons from "./components/FolderButtons";

export default function App() {

	const [flipped, setFlipped] = useState("");    // Tracking "flipped" class for pages
	const [folderFlipped, setFolderFlipped] = useState("folder");    // Tracking "folder-flip" class for folder

	return (
		<div>
			<Folder flipped={flipped} folderFlip={folderFlipped}/>
			<FolderButtons setFlipped={setFlipped} setFolderFlipped={setFolderFlipped}/>
		</div>
	);
}
