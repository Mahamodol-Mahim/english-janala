const createElements = (arr) => {
    const htmlElements = arr.map((el) => `<span class="btn">${el}</span>`);
    // console.log(htmlElements)               // return an array        
    console.log(htmlElements.join(" "));    // return a string
};

const synonyms = ["hello", "hi", "konnichiwa"];
createElements(synonyms);
