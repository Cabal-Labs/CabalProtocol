import React, { createContext, ReactNode } from "react";

// Define the type for your context data
interface AppContextData {
	// Define your state variables here
	// data: SomeDataType;
	// setData: React.Dispatch<React.SetStateAction<SomeDataType>>;
}

// Create a new context with the provided data type
const AppContext = createContext<AppContextData | undefined>(undefined);

// Define a type for the AppProvider's children prop
export interface AppProviderProps {
	children: ReactNode;
}

export { AppContext };
