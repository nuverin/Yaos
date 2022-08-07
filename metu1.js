'use strict';


// default, name object in array 
// function access query selector
function selector(value){
    let self = {
        elem : document.querySelector(value),
        event : (eventName, query) => {
           addEventListener(eventName, query)
        },
        target : (content) => {
            // create queryselector access
            self.elem.classList.toggle(content)
        }
    }
    return self;
}
function Valide(options){
        if(options.hasOwnProperty('class') && options.hasOwnProperty('style')  && options.hasOwnProperty('targetStyle') !== null && options !== null){  
           return selector(options['class']).event('click', function(){
                selector(options['targetStyle']).target(options['style'])
           })
        };
}
Valide({
    class : '.active',
    style : 'rb',
    targetStyle : 'p'
})