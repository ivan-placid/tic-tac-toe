class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null, ],
                        [null, null, null, ],
                        [null, null, null, ],
        ],
        this.CurrentPlayerSymbol = 'x'

    }


    printMatrix() {
        this.matrix.forEach(x => console.log(x))
        console.log();
    }


    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol
    }


    switchSymbol() {
        this.CurrentPlayerSymbol = ['x', 'o'].filter( (x) => x !== this.CurrentPlayerSymbol)[0]
    }


    nextTurn(rowIndex, columnIndex) {
        if (!this.matrix[rowIndex][columnIndex]) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol()
            this.switchSymbol()
        }
        
    }

    isFinished() {
        return (this.getWinner()!== null || this.isDraw()) || false
    }

    getWinner() {

        let rs = [];
        //horizontal, vertical
        for (var i=0; i < this.matrix.length; i++){
            rs.push(this.matrix[i][0] + this.matrix[i][1]+ this.matrix[i][2]);
            rs.push(this.matrix[0][i]+this.matrix[1][i]+this.matrix[2][i]);
        }
        //diagonal
        rs.push(this.matrix[0][0]+this.matrix[1][1]+this.matrix[2][2]);
        rs.push(this.matrix[0][2]+this.matrix[1][1]+this.matrix[2][0]);
        
        for (var i=0; i < rs.length; i++){
            if (rs[i] === 'ooo'){
                return 'o';
            } else if (rs[i] === 'xxx'){
                return 'x';
            }
        }


        return null

    }

    noMoreTurns() {
        return !this.matrix
            .map(x => x.includes(null))
            .includes(true)
            }

    isDraw() {
        return this.noMoreTurns() && !(this.getWinner())
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}



module.exports = TicTacToe;

