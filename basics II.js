function magic_multiply(x, y) {
    var newArr = [];
    if (x.constructor === Array) {
        for (var i = 0; i < x.length; i++) {
            newArr.push(x[i] * y);
        }
        return newArr;
    }
    else if(y.constructor === String && x.constructor === Number){
        return "Error: Can not multiply by string"
    }
    else if (x.constructor == String){
        var newStr = '';
        for(var i = 0; i < y; i++){
            newStr += x;            
        }
        return newStr;

    }
    else {
        return x * y
    }
}
let test1 = magic_multiply(5, 2);
console.log(test1); // outputs: 10

let test2 = magic_multiply(0, 0);
console.log(test2); // outputs: 0

let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3); // outputs: [ 2, 4, 6 ]

let test4 = magic_multiply(7, "three");
console.log(test4); // outputs: Error: Can not multiply by string

let test5 = magic_multiply("Brendo", 4);
console.log(test5); // outputs: BrendoBrendoBrendoBrendo