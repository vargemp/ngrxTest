export interface State {
    brand: string;
    fuelRemaining: number;
    consumption: number; // per 1 km
    distanceToGo: number;
    distanceRemaining: number;
    errorMsg: string;
}


export const initialCarState: State = {} as State;
