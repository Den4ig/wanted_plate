import { useState } from "react";
import { useFolder } from "../../components/Contexts/FolderContext";
import FolderPage from "../FolderPage/FolderPage";
import Papers from "../Papers/Papers";
import PageButtons from "../PageButtons/PageButtons";
import styles from "./Folder.module.css";

export default function Folder({ folderMove=null }) {

	const { buttonStyles, numOfPaperPages, flipped, folderStyle } = useFolder();

	const [currentPage, setCurrentPage] = useState(0);

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, numOfPaperPages));
	};

	const handlePrev = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 0));
	};

	return (
		<div className={styles.folder_bg}>

			 <PageButtons buttonStyle={buttonStyles.left} movePage={handlePrev}/>    {/*Button for page flipping */}

			<div className={folderMove}>
				<FolderPage flipped={flipped} zIndex={folderStyle.zIndex} folderTransition={folderStyle.transition}/>             {/*Folder pages */}
				<FolderPage>
					<Papers currentPage={currentPage}/>
				</FolderPage>
			</div>

			<PageButtons  buttonStyle={buttonStyles.right} movePage={handleNext}/>    {/*Button for page flipping */}

		</div>
	);
}
