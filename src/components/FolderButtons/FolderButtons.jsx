import styles from "./FolderButtons.module.css";

const FolderButtons = ({ isOpened=null, handleClick=null }) => {

	return (
		<div className={styles.folder_buttons}>
			<button onClick={handleClick}>
				{isOpened ? "Открыть" : "Закрыть"}
			</button>
		</div>
	);
};

export default FolderButtons;
