'use strict';


// default, name object in array 

function Valide(options){
        if(options.hasOwnProperty('Selector') && options.hasOwnProperty('Style') !== null){
            return Object.assign({}, options)
        };
}
const obj = Valide({
    'Selector' : '.active',
    'Style' : 'red'
})
console.log(obj)