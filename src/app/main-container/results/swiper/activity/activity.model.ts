export class Activity {
    constructor(
        public name: string, 
        public photoUrl: string,
        public placeId: string, 
        public rating: number,
        public lattitude: number,
        public longitude: number,
        public address: string,
        public website: string,
        public phone: number,
        public openingHours: any,
        public currentOpening: any,
    ) {}
}