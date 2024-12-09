import { useState } from "react";
import Folder from "./components/Folder";
import FolderButtons from "./components/FolderButtons";

export default function App() {

	const [flipped, setFlipped] = useState("");    // Tracking "flipped" class for pages
	const [folderFlipped, setFolderFlipped] = useState("folder");    // Tracking "folder-flip" class for folder
	const [buttonStyles, setButtonStyles] = useState([             // Moving page buttons when opening folder
		{}, // First button style
		{}  // Second button style
	  ]);
	const [folderZIndex, setFolderZIndex] = useState("2");  //Set folder's flipped page z-index when flipped
	const [folderTransition, setFolderTransition] = useState("0.7s");  //Set folder's flipped page transition time when flipped or unflipped
	
	return (
		<div>
			<Folder 
				flipped={flipped} 
				folderFlip={folderFlipped} 
				buttonStyle={buttonStyles}
				numOfPaperPages={5}
				zIndex={folderZIndex}
				folderTransition={folderTransition}
			/>
			<FolderButtons 
				setFlipped={setFlipped} 
				setFolderFlipped={setFolderFlipped} 
				setButtonStyle={setButtonStyles}
				setFolderZIndex={setFolderZIndex}
				setFolderTransition={setFolderTransition}
			/>
		</div>
	);
}
