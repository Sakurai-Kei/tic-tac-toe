const Player = (_name, _sign) => {
    this._name = _name;
    this._sign = _sign;

    const getName = () => {
        return _name;
    };

    const getSign = () => {
        return _sign;
    };

    return {getName, getSign};
};

const gameArea = (() => {
    const _setPlayArea = Array.from(document.querySelectorAll('.column'));
    let _move = 1;
    let getMove = () => {
        return _move;
    }
    _setPlayArea.forEach(box => {
        box.addEventListener('click', _setAreaSign)
    });
    function _setAreaSign() {
        if(this.textContent !== ""){
            return;
        };
        switch(_move%2){
            case 1:
                this.textContent = `${playerX.getSign()}`;
                _move++;
                break;
            case 0:
                this.textContent = `${playerO.getSign()}`;
                _move++;
                break;
        };
    };

    function getAreaSign() {
        let _playAreaSign = [];
        _setPlayArea.forEach(box => {
            _playAreaSign.push(box.textContent);
        })
        return _playAreaSign;
    }

    function resetAreaSign() {
        _move = 1;
        _setPlayArea.forEach(box => {
            box.textContent = "";
        })
    }
    return {getMove,getAreaSign, resetAreaSign}
})();

const gameInitialise = (() => {
    function winCondition(){
        let _playAreaSign = gameArea.getAreaSign();
        function _playerInputCombined(){
            let _row1 = [_playAreaSign[0], _playAreaSign[1], _playAreaSign[2]];
            let _row2 = [_playAreaSign[3], _playAreaSign[4], _playAreaSign[5]];
            let _row3 = [_playAreaSign[6], _playAreaSign[7], _playAreaSign[8]];
            let _column1 = [_playAreaSign[0], _playAreaSign[3], _playAreaSign[6]];
            let _column2 = [_playAreaSign[1], _playAreaSign[4], _playAreaSign[7]];
            let _column3 = [_playAreaSign[2], _playAreaSign[5], _playAreaSign[8]];
            let _diagonal1 = [_playAreaSign[0], _playAreaSign[4], _playAreaSign[8]];
            let _diagonal2 = [_playAreaSign[2], _playAreaSign[4], _playAreaSign[6]];
    
            let _rowCombined = [_row1, _row2, _row3];
            let _columnCombined = [_column1, _column2, _column3];
            let _diagonalCombined = [_diagonal1, _diagonal2];

            return {_rowCombined, _columnCombined, _diagonalCombined}
        }
        _playerInputCombined()._rowCombined.forEach(row => {
            let _searchX = row.filter(_sign => _sign == "X");
            let _searchO = row.filter(_sign => _sign == "O");
            if(_searchX.length == 3){
                return console.log(`playerX wins?`);
            }
            else if(_searchO.length == 3){
                return console.log(`playerO wins?`);
            }
        })
        _playerInputCombined()._columnCombined.forEach(column => {
            let _searchX = column.filter(_sign => _sign == "X");
            let _searchO = column.filter(_sign => _sign == "O");
            if(_searchX.length == 3){
                return console.log(`playerX wins?`);
            }
            else if(_searchO.length == 3){
                return console.log(`playerO wins?`);
            }
        })
        _playerInputCombined()._diagonalCombined.forEach(diagonal => {
            let _searchX = diagonal.filter(_sign => _sign =="X");
            let _searchO = diagonal.filter(_sign => _sign == "O");
            if(_searchX.length == 3){
                return console.log(`playerX wins?`);
            }
            else if(_searchO.length == 3){
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