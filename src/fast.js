// let matrix = [['x', null, null, ],
//                         [null, null, null, ],
//                         [null, null, null, ],
//         ]



// console.log(matrix[0][0])


let obj = {

    matrix: [[ 'x', 'o', 'o' ],
            [ 'x', 'x', 'x' ],
            [ 'o', 'x', 'o' ]],

    isDraw: function() {
        console.log(this.matrix.forEach( (x) => x.length));
    },

    CurrentPlayerSymbol: 'x',
    switchSymbol: function () {
        this.CurrentPlayerSymbol = ['x', 'o'].filter( (x) => x !== this.CurrentPlayerSymbol)[0]
    },


    getWinner: function(){

        let rs = [];
        for (var i=0; i < this.matrix.length; i++){
            rs.push(this.matrix[i][0] + this.matrix[i][1]+ this.matrix[i][2]);
            rs.push(this.matrix[0][i]+this.matrix[1][i]+this.matrix[2][i]);
        }



        rs.push(this.matrix[0][0]+this.matrix[1][1]+this.matrix[2][2]);
        rs.push(this.matrix[0][2]+this.matrix[1][1]+this.matrix[2][0]);


        console.log(rs);
        
        
        for (var i=0; i < rs.length; i++){
            if (rs[i] === 'ooo'){
                return 'o';
            } else if (rs[i] === 'xxx'){
                return 'x';
            }
        }


        return null

    },



    printMatrix: function() {
        this.matrix.forEach(x => console.log(x))
    },

}



let mebee = obj.getWinner();
console.log(mebee);
