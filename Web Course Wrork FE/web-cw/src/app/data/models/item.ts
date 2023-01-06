export class item {
    constructor(
        public id:string,
        public name:string,
        public description:string,
        public purchasePrice:number,
        public retailPrice:number,
        public quantity:number,
        public productionCode:string,
        public category:string
        ) {}
}