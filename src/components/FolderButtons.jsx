import { useState } from "react";
const FolderButtons = ({setFlipped, setFolderFlipped}) => {
	const [isOpened, setIsOpened] = useState(true);

	const handleClick = () => {
		setIsOpened(!isOpened);   //change button name
		setFlipped((prev) => (prev === "flipped" ? "" : "flipped"));   // Add "flipped" class to pages
		setFolderFlipped((prev) => (prev === "folder" ? "folder folder-flip" : "folder"));  // Add "folder-flip" class to folder div
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
