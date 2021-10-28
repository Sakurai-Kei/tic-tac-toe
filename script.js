const Player = (name, sign) => {
    this.name = name;
    this.sign = sign;

    const getName = () => {
        return name;
    };

    const getSign = () => {
        return sign;
    };

    return {getName, getSign};
};

const gameArea = (() => {
    const setPlayArea = Array.from(document.querySelectorAll('.column'));
    let move = 1;
    let getMove = () => {
        return move;
    }
    setPlayArea.forEach(box => {
        box.addEventListener('click', setAreaSign)
    });
    function setAreaSign() {
        if(this.textContent !== ""){
            console.log(`Illegal Move`)
            return;
        };
        switch(move%2){
            case 1:
                this.textContent = `${playerX.getSign()}`;
                move++;
                break;
            case 0:
                this.textContent = `${playerO.getSign()}`;
                move++;
                break;
        };
    };

    function getAreaSign() {
        let playAreaSign = [];
        setPlayArea.forEach(box => {
            playAreaSign.push(box.textContent);
        })
        return playAreaSign;
    }

    function resetAreaSign() {
        move = 1;
        setPlayArea.forEach(box => {
            box.textContent = "";
        })
    }
    return {getMove,getAreaSign, resetAreaSign}
})();

const gameInitialise = (() => {
    function winCondition(){
        let playAreaSign = gameArea.getAreaSign();
        let row1 = [playAreaSign[0], playAreaSign[1], playAreaSign[2]];
        let row2 = [playAreaSign[3], playAreaSign[4], playAreaSign[5]];
        let row3 = [playAreaSign[6], playAreaSign[7], playAreaSign[8]];
        let column1 = [playAreaSign[0], playAreaSign[3], playAreaSign[6]];
        let column2 = [playAreaSign[1], playAreaSign[4], playAreaSign[7]];
        let column3 = [playAreaSign[2], playAreaSign[5], playAreaSign[8]];
        let diagonal1 = [playAreaSign[0], playAreaSign[4], playAreaSign[8]];
        let diagonal2 = [playAreaSign[2], playAreaSign[4], playAreaSign[6]];

        let rowCombined = [row1, row2, row3];
        let columnCombined = [column1, column2, column3];
        let diagonalCombined = [diagonal1, diagonal2];
        
        rowCombined.forEach(row => {
            let searchX = row.filter(sign => sign == "X");
            let searchO = row.filter(sign => sign == "O");
            if(searchX.length == 3){
                return console.log(`playerX wins?`);
            }
            else if(searchO.length == 3){
                return console.log(`playerO wins?`);
            }
        })
        columnCombined.forEach(column => {
            let searchX = column.filter(sign => sign == "X");
            let searchO = column.filter(sign => sign == "O");
            if(searchX.length == 3){
                return console.log(`playerX wins?`);
            }
            else if(searchO.length == 3){
                return console.log(`playerO wins?`);
            }
        })
        diagonalCombined.forEach(diagonal => {
            let searchX = diagonal.filter(sign => sign =="X");
            let searchO = diagonal.filter(sign => sign == "O");
            if(searchX.length == 3){
                return console.log(`playerX wins?`);
            }
            else if(searchO.length == 3){
                return console.log(`playerO wins?`);
            }
        })
        if(gameArea.getMove() == 10){
            return console.log(`Draw`);
        }
    }
    return {winCondition}
})();



const resetButton = document.getElementById('restart');
resetButton.addEventListener('click', gameArea.resetAreaSign);

const playerX = Player("Sakurai", "X");
const playerO = Player("Cipher", "O");