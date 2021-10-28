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
    const playArea = Array.from(document.querySelectorAll('.column'));
    playArea.forEach(area => {
        area.addEventListener('click', setSign)
        console.log(area);
    })
    function setSign() {
      this.textContent = `${playerX.getSign()}`;
    }
    

})();

const playerX = Player("Sakurai", "X");
const playerO = Player("Cipher", "O");