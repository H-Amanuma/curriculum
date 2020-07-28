//問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
for (let num of numbers){
    if (num % 2 === 0) {
        isEven(num);
    }
}

function isEven(num) { 
    console.log(num + 'は偶数です');
}

//問2
class Car {
    constructor(num, gas) {
        this.num = num;
        this.gas = gas;
    }

getNumGas() {
    console.log(`ガソリンは${this.num}です。ナンバーは${this.gas}です`)
    }
}

let markx = new Car('ハイオク', 1967);
markx.getNumGas();