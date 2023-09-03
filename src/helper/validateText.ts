

export const validateText = (str: string) => {
    const arrOne: Array<number> = [];
    const arrTwo: Array<number> = [];
    
    const newStr = str.replace(/\&lt\;/gi,'<').replace(/\&gt\;/gi,'>')
    newStr.split("").map((el: any, index: number) => {
        if (el === "<") {
            arrOne.push(index);
        } else if (el === ">") {
            arrTwo.push(index);
        }
    });
    const count = 0;
    const arrText: Array<string> = [];

    arrTwo.map((_el: number, index: number) => {
        arrText.push(newStr.slice(arrTwo[index] + 1, arrOne[index + 1]));
        count + 2;
    });



    return  arrText.join("").replace(/\//gi,'')
};
