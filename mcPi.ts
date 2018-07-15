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

    constructor(public sketch?: (p5: p5) => void)
    {
        this.radius = Display.width/4
        this.circleRadiusSq = this.radius * this.radius;
        this.totalPoints = 1;
        this.pointsInCircle = 1;
        this.updatePi();
    }

    inCircle(x: number, y: number): int
    {
        return ( (x*x + y*y) <= this.circleRadiusSq );
    }

    update(x: number, y: number): double
    {
        this.totalPoints++;
        this.pointsInCircle += this.inCircle(x,y);
        this.updatePi();
        return this.pi_;
    }

    updatePi(): void
    {
        this.pi_ = 16 * this.pointsInCircle / this.totalPoints;
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
