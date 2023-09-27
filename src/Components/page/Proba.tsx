import  { useEffect } from "react";

const Proba = () => {
    useEffect(() => {
        const fs = require("fs");

        fs.readFile("example.txt", "utf8", (err: any, data: any) => {
            if (err) throw err;
            console.log(data);
        });
    }, []);
    return <div></div>;
};

export default Proba;
