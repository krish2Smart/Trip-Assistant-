export class Activity {
    constructor(
        public name: string, 
        public photoUrl: string,
        public placeId: string, 
        public rating: number,
        public lattitude: number,
        public longitude: number
    ) {}
}