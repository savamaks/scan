
import { useContext } from "react";
import { Context } from "./Context";


const ArrowLeft = ({ children }: any) => {

    const { arrowLeft } = useContext(Context);
        
    
    return <button onClick={arrowLeft}>{children}</button>;
};

export default ArrowLeft;
