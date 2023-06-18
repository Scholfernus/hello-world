export class Point {
    
    constructor(private _x?: number,private y?: number){      
    }
    draw() {
      console.log('X: ' + this._x + ', Y: ' + this.y);  //...
    }
    getDistance(another: Point){
        //...
    }
    get x() {
        return this._x;
    }
    set x(value){
        if (value < 0)
        throw new Error('value cannot be less than zero');
        this._x = value;
    }
}