import { createContext, useContext } from "react";

export const FolderContext = createContext();
export const useFolder = () => useContext(FolderContext);