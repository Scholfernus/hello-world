function doSomething(){
    for (var i =0; i<5; i++){
        console.log(i);
    }
    console.log('Finally: ' + i);
}
doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true,'a',false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red =0, Green = 1, Blue = 2};
let backgroundColor = Color.Red; 

let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');

class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number){
        this.x = x; 
        this.y = y;
    }
    draw() {
      console.log('X: ' + this.x + ', Y: ' + this.y);  //...
    }
    getDistance(another: Point){
        //...
    }
}

let point = new Point(1,2);
point.x =3;
point.draw();