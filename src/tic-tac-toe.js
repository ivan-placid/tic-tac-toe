class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null, ],
                        [null, null, null, ],
                        [null, null, null, ],
        ],
        this.CurrentPlayerSymbol = 'x'

    }


// should return `x` or `o`
    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol
    }


    switchSymbol() {
        this.CurrentPlayerSymbol = ['x', 'o'].filter( (x) => x !== this.CurrentPlayerSymbol)[0]
    }


// should properly update class state (change current player, update marks storage etc.)
    nextTurn(rowIndex, columnIndex) {
        this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol()
        this.switchSymbol()
    }

// should return true if game is finished (e.g. there is a winner or it is a draw)
    isFinished() {
        return this.isDraw() || this.getWinner()
    }

// should return winner symbol (`x` or `o`) or null if there is no winner yet
    getWinner() {

        let rs = [];
        //horizontal, vertical
        for (var i=0; i < matrix.length; i++){
            rs.push(matrix[i]);
            rs.push(matrix[0][i]+matrix[1][i]+matrix[2][i]);
        }
        //diagonal
        rs.push(matrix[0][0]+matrix[1][1]+matrix[2][2]);
        rs.push(matrix[0][2]+matrix[1][1]+matrix[2][0]);
        
        for (var i=0; i < rs.length; i++){
            if (rs[i] === 'ooo'){
                return 'o';
            } else if (rs[i] === 'xxx'){
                return 'x';
            }
        }

    }

// should return true if there is no more fields to place a `x` or `o`
    noMoreTurns() {
        return !this.matrix
            .map(x => x.includes(null))
            .includes(true)
            }

// should return true if there is no more turns and no winner
    isDraw() {
        return this.noMoreTurns && !(this.getWinner === 'x' || this.getWinner === 'o')
    }

// should return `matrix[row][col]` value (if any) or `null`
    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}



module.exports = TicTacToe;

let game;
game = new TicTacToe();

game.nextTurn(0, 1)

