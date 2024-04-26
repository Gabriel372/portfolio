import {  createContext,useState } from "react";
import { Props } from "@/types/Types";
export const MyContext = createContext({});


export function MyContextProvider({children}:Props) {  
const [ThemeIsDark,setThemeIsDark] = useState<boolean>(false);



return ( <MyContext.Provider value={{ThemeIsDark,setThemeIsDark}}>
      {children}
    </MyContext.Provider>
  )

}

