import { useState } from "react";
const FolderButtons = ({ isOpened=null, handleClick=null }) => {

	return (
		<div className="folder_buttons">
			<button className="folder_open" onClick={handleClick}>
				{isOpened ? "Открыть" : "Закрыть"}
			</button>
		</div>
	);
};

export default FolderButtons;
