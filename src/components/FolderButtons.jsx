import { useState } from "react";
const FolderButtons = ({ setFlipped, setFolderFlipped, setButtonStyle, setFolderZIndex, setFolderTransition }) => {
	const [isOpened, setIsOpened] = useState(true);  // Change button name
	const [isStyled, setIsStyled] = useState(false);  // Page buttons styles for moving them and opacity change

	const handleClick = () => {
		setIsOpened(!isOpened);   // Change button name
		setFlipped((prev) => (prev === "flipped" ? "" : "flipped"));   // Add "flipped" class to pages
		setFolderFlipped((prev) => (prev === "folder" ? "folder folder-flip" : "folder"));  // Add "folder-flip" class to folder div
		setIsStyled((prev) => !prev);    // Change page button style
		setButtonStyle(isStyled          // Page buttons styles for moving them and opacity change
			 ? [{opacity: "0"}, {opacity: "0"}]   
			 : [
				{	transform: "translateX(-324px) rotate(90deg)",
				 	opacity: "100"
				}, 
				{	transform: "translateX(336px) rotate(270deg)",
					opacity: "100"
				}
				]
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
		<div className="folder_buttons">
			<button className="folder_open" onClick={handleClick}>
				{isOpened ? "Открыть" : "Закрыть"}
			</button>
		</div>
	);
};

export default FolderButtons;
