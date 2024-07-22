import { createContext , useState } from "react";

export const ProductContext = createContext(null);

export const ProductProvider = (props) => {
    const [dataUpload,setDataUpload] = useState([]);
    return(
        <ProductContext.Provider value={{dataUpload,setDataUpload}}>
        {props.children}
    </ProductContext.Provider>
    )
   
}

