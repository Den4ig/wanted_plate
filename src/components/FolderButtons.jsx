import { useState } from "react";
const FolderButtons = ({setFlipped, setFolderFlipped, setButtonStyle}) => {
	const [isOpened, setIsOpened] = useState(true);
	const [isStyled, setIsStyled] = useState(false);

	const handleClick = () => {
		setIsOpened(!isOpened);   // Change button name
		setFlipped((prev) => (prev === "flipped" ? "" : "flipped"));   // Add "flipped" class to pages
		setFolderFlipped((prev) => (prev === "folder" ? "folder folder-flip" : "folder"));  // Add "folder-flip" class to folder div
		setIsStyled((prev) => !prev);    // Change page button style
		setButtonStyle(isStyled          // Page buttons styles for moving them
			 ? [{}, {}] 
			 : [
				{transform: "translateX(-316px)"}, 
				{transform: "translateX(328px)"}
				]
			);
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
