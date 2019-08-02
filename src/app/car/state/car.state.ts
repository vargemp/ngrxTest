export interface State {
    brand: string;
    fuelRemaining: number;
    consumption: number;
    distanceToGo: number;
    distanceRemaining: number;
}

export const initialState: State = {} as State;
