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
	
	return (
		<div>
			<Folder 
				flipped={flipped} 
				folderFlip={folderFlipped} 
				buttonStyle={buttonStyles}
			/>
			<FolderButtons 
				setFlipped={setFlipped} 
				setFolderFlipped={setFolderFlipped} 
				setButtonStyle={setButtonStyles}
			/>
		</div>
	);
}
