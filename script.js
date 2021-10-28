const Player = (name, sign) => {
    this.name = name;
    this.sign = sign;

    const getName = () => {
        return name;
    }

    const getSign = () => {
        return sign;
    }

    return {getName, getSign};
}

const gameArea = (() => {
    const setPlayArea = Array.from(document.querySelectorAll('.column'));
    let move = 1;
    setPlayArea.forEach(box => {
        box.addEventListener('click', setAreaSign)
    })
    function setAreaSign() {
        console.log(move);
        console.log(this)
        switch(move%2){
            case 1:
                this.textContent = `${playerX.getSign()}`;
                console.log(`Log2`)
                move++;
                break;
            case 0:
                this.textContent = `${playerO.getSign()}`;
                console.log(`Log3`)
                move++;
                break;
        }
    }
    

})();

const playerX = Player("Sakurai", "X");
const playerO = Player("Cipher", "O");