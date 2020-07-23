class Taiyaki {
    constructor(flevor) {
        this.flevor = flevor;
    }

    contents() {
        console.log(`中身は${this.flevor}です`);
    }
}

let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');
let matcha = new Taiyaki('抹茶');

anko.contents();
cream.contents();
cheese.contents();
matcha.contents();