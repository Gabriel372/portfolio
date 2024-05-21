import {  createContext,useState } from "react";
import { Props,TmodalProject } from "@/types/Types";
export const MyContext = createContext({});


export function MyContextProvider({children}:Props) {  
const [ThemeIsDark,setThemeIsDark] = useState<boolean>(false);
const [Modal,setModal] = useState<TmodalProject>({IsOpen:false,img:''})

return ( <MyContext.Provider value={{ThemeIsDark,Modal,setModal,setThemeIsDark}}>
      {children}
    </MyContext.Provider>
  )

}

