// let matrix = [['x', null, null, ],
//                         [null, null, null, ],
//                         [null, null, null, ],
//         ]



// console.log(matrix[0][0])


let obj = {

    matrix: [['x', null, null, ],
                    [null, null, null, ],
                    [null, null, null, ],
            ],

    isDraw: function() {
        console.log(this.matrix.forEach( (x) => x.length));
    },

    CurrentPlayerSymbol: 'x',
    switchSymbol: function () {
        this.CurrentPlayerSymbol = ['x', 'o'].filter( (x) => x !== this.CurrentPlayerSymbol)[0]
    }

}



// console.log(obj.matrix);
console.log(obj.isDraw());





