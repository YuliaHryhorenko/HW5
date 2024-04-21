function drawTriangle(height, symbol) {
    for (let rowNumber = 1; rowNumber <= height; rowNumber++) {
        let line = '';
        for (let symbolNumber = 0; symbolNumber < rowNumber; symbolNumber++) {
            line = line + symbol;
        }
        console.log(line);
    }
}
drawTriangle(5, "*");
