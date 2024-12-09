import { useState } from "react";
import FolderPage from "./FolderPage";
import Papers from "./Papers";
import PageButtons from "./PageButtons";

export default function Folder({ flipped, folderFlip, buttonStyle, numOfPaperPages, zIndex, folderTransition }) {

	const [currentPage, setCurrentPage] = useState(0);

	const handleNext = () => {
		setCurrentPage((prev) => Math.min(prev + 1, numOfPaperPages));
	};

	const handlePrev = () => {
		setCurrentPage((prev) => Math.max(prev - 1, 0));
	};

	return (
		<div className="folder_bg">

			 <PageButtons buttonStyle={buttonStyle[0]} movePage={handlePrev}/>    {/*Button for page flipping */}

			<div className={folderFlip}>
				<FolderPage flipped={flipped} zIndex={zIndex} folderTransition={folderTransition}/>             {/*Folder pages */}
				<FolderPage flipped={""} zIndex={""} folderTransition={""}>
					<Papers currentPage={currentPage} numOfPaperPages={numOfPaperPages}/>
				</FolderPage>
			</div>

			<PageButtons  buttonStyle={buttonStyle[1]} movePage={handleNext}/>    {/*Button for page flipping */}

		</div>
	);
}
