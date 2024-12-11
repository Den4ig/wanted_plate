import { useState } from "react";
import Folder from "./components/Folder";
import FolderButtons from "./components/FolderButtons/FolderButtons";

export default function App() {

	const [flipped, setFlipped] = useState("");    // Tracking "flipped" class for pages
	const [folderFlipped, setFolderFlipped] = useState("folder");    // Tracking "folder-flip" class for folder
	const [buttonStyles, setButtonStyles] = useState({   // Moving page buttons when opening folder
		left: {},
		right: {}
	});  
	const [folderZIndex, setFolderZIndex] = useState("2");  //Set folder's flipped page z-index when flipped
	const [folderTransition, setFolderTransition] = useState("0.7s");  //Set folder's flipped page transition time when flipped or unflipped

	const [isOpened, setIsOpened] = useState(true);  // Change button name
	const [isStyled, setIsStyled] = useState(false);  // Page buttons styles for moving them and opacity change

	const handleClick = () => {
		setIsOpened(!isOpened);   // Change button name
		setFlipped((prev) => (prev === "flipped" ? "" : "flipped"));   // Add "flipped" class to pages
		setFolderFlipped((prev) => (prev === "folder" ? "folder folder_flip" : "folder"));  // Add "folder-flip" class to folder div
		setIsStyled((prev) => !prev);    // Change page button style
		setButtonStyles(isStyled          // Page buttons styles for moving them and opacity change
			 ? {left: {opacity: "0"}, right: {opacity: "0"}}   
			 : 	{
				left: {	transform: "translateX(-324px) rotate(90deg)", opacity: "100" },
				right: { transform: "translateX(336px) rotate(270deg)", opacity: "100" }
			}
		);
		setFolderZIndex((prev) => (prev === "2" ? "0" : "2"));   //Set folder's flipped page z-index when flipped
		setFolderTransition((prev) => {			//Set folder's flipped page transition time when flipped or unflipped
			if(isOpened) {
				return prev = "0.7s";
			} else {
				return prev = "0s";
			}
		});

	};
	
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
				handleClick={handleClick}
				isOpened={isOpened}
			/>
		</div>
	);
}
