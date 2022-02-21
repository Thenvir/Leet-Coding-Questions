class Interval {

    start: number;
    end: number;

    constructor(start: number, end: number){
        this.start = start;
        this.end = end;
    }

    get_interval(): string {
        return `[${this.start},${this.end}]`
    }
}

export default Interval;