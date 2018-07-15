import * as Display from 'display'
import * as Sensor from 'sensors'
import Floor from 'floor'
import {User} from 'floor'
import p5 from "p5"

export default class MCPi {
    public p5: p5;
    private circleRadiusSq: double;
    private totalPoints: double;
    private pointsInCircle: double;
    private pi_: double;

    public preload?: (this: p5, p5: p5) => void
    public setup?: (this: p5, p5: p5) => void
    public draw?: (this: p5, floor: Floor, p5: p5) => void
    public radius: double;
    public scaler: double;

    constructor(public sketch?: (p5: p5) => void)
    {
        this.scaler = 2;
        this.radius = 72./this.scaler;
        this.circleRadiusSq = this.radius * this.radius;
        this.totalPoints = 1;
        this.pointsInCircle = 1;
        this.updatePi();
    }

    inCircle(x: number, y: number): int
    {
        return ((x-this.radius) * (x-this.radius) + (y - this.radius) * (y - this.radius) <= this.circleRadiusSq);
    }

    update(x: number, y: number): double
    {
        //console.log(x + " , " + y)
        //console.log("centerX -> " + Display.width/2 + " , " + "centerY -> " + Display.height/2)
        this.totalPoints++;
        this.pointsInCircle += this.inCircle(x,y);
        this.updatePi();
        return this.pi_;
    }

    updatePi(): void
    {
        this.pi_ = this.scaler * this.scaler * this.pointsInCircle / this.totalPoints;
        console.log(this.pi_)
    }

    get pi(): double
    {
        return this.pi_;
    }

    reset(): void
    {
        this.totalPoints = 1.;
        this.pointsInCircle = 1.;
       this.updatePi();
    }
}
