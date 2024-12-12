import { useState } from "react";
import FolderPage from "../FolderPage/FolderPage";
import Papers from "../Papers/Papers";
import PageButtons from "../PageButtons/PageButtons";
import styles from "./Folder.module.css";

export default function Folder({ flipped=null, folderMove=null, buttonStyle=null, numOfPaperPages=null, zIndex=null, folderTransition=null }) {

	const [currentPage, setCurrentPage] = useState(0);

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, numOfPaperPages));
	};

	const handlePrev = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 0));
	};

	return (
		<div className={styles.folder_bg}>

			 <PageButtons buttonStyle={buttonStyle.left} movePage={handlePrev}/>    {/*Button for page flipping */}

			<div className={folderMove}>
				<FolderPage flipped={flipped} zIndex={zIndex} folderTransition={folderTransition}/>             {/*Folder pages */}
				<FolderPage>
					<Papers currentPage={currentPage} numOfPaperPages={numOfPaperPages}/>
				</FolderPage>
			</div>

			<PageButtons  buttonStyle={buttonStyle.right} movePage={handleNext}/>    {/*Button for page flipping */}

		</div>
	);
}
