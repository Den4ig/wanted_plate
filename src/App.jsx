import "./css/App.css";
import "./js/folder_flip";
import Folder from "./components/Folder";
import FolderButtons from "./components/FolderButtons";

export default function App() {
  return (
    <div>
      <Folder></Folder>
      <FolderButtons></FolderButtons>
      </div>
  );
}
