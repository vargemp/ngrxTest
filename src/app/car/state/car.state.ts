export interface State {
    brand: string;
    fuelRemaining: number;
    consumption: number; // per 1 km
    distanceToGo: number;
    distanceRemaining: number;
}

export const initialCarState: State = {} as State;
