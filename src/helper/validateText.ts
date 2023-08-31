export const validateText = (str: string) => {
    const arrOne: any = [];
    const arrTwo: any = [];
    console.log(str);
    str.split("").map((el: any, index: number) => {
        if (el === "<") {
            arrOne.push(index);
        } else if (el === ">") {
            arrTwo.push(index);
        }
    });
    const count = 0;
    const arrText: any = [];

    arrTwo.map((el: any, index: number) => {
        arrText.push(str.slice(arrTwo[index] + 1, arrOne[index + 1]));
        count + 2;
    });
    const we = ''
    
    return  arrText.join("").replace(/\&lt\;.*\&gt\;|\&lt\;\/.*\&gt\;/gi,'')
};


//.replace(/\&lt\;|\/|i\&gt|p\&gt|div\&gt|body\&gt|data\&gt|b\&gt|\;|br\&gt|\|/gi,'')