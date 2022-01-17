const randomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateIntList = (min: number, max: number, numOfElement: number) => {
    const randomIntList: number[] = [];
    for (let i = 0; i < numOfElement; i++) {
        const randomInt = randomInteger(min, max);
        if (!randomIntList.includes(randomInt))
            randomIntList.push(randomInt);
        else
            i--;
    }
    return randomIntList;
};

export default generateIntList;