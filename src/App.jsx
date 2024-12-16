import { useState, createContext } from "react";
import Folder from "./components/Folder/Folder";
import FolderButtons from "./components/FolderButtons/FolderButtons";
import folderStyles from "./components/Folder/Folder.module.css";
import folderPageStyles from "./components/FolderPage/FolderPage.module.css";

export const FolderContext = createContext();

export default function App() {

	const numOfPaperPages = 5;  //Number of pages inside of folder

	const [flipped, setFlipped] = useState("");    // Tracking "flipped" class for pages
	const [folderFlipped, setFolderFlipped] = useState(folderStyles.folder);    // Tracking "folder-flip" class for folder
	const [buttonStyles, setButtonStyles] = useState({   // Moving page buttons when opening folder
		left: {},
		right: {}
	});  
	const [folderZIndex, setFolderZIndex] = useState("2");  //Set folder's flipped page z-index when flipped
	const [folderTransition, setFolderTransition] = useState("0.7s");  //Set folder's flipped page transition time when flipped or unflipped

	const [isOpened, setIsOpened] = useState(true);  // Change button name
	const [isStyled, setIsStyled] = useState(false);  // Page buttons styles for moving them and opacity change
	const [isFolderOpened, setIsFolderOpened] = useState(true);  // Closing all pages if we close folder

	// Handle click

	const handleClick = () => {
		setIsOpened(!isOpened);   // Change button name
		setFlipped((prev) => (prev === `${folderPageStyles.folder_flipped}` ? "" : `${folderPageStyles.folder_flipped}`));   // Add "flipped" class to pages
		setFolderFlipped((prev) => (
			prev === folderStyles.folder 
			? `${folderStyles.folder} ${folderStyles.folder_move}` 
			: folderStyles.folder // Add "folder-flip" class to folder div
		));  
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
		setIsFolderOpened(!isFolderOpened);		// Closing all pages if we close folder
	};
	
	return (
		<div>
			<FolderContext.Provider value={{ buttonStyles, isFolderOpened, numOfPaperPages, flipped, folderZIndex, folderTransition }}>
				<Folder
					folderMove={folderFlipped}
				/>
			</FolderContext.Provider>
			<FolderButtons
				isOpened={isOpened}
				handleClick={handleClick}
			/>
		</div>
	);
}
