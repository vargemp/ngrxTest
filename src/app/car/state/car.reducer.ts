import { createReducer, on } from '@ngrx/store';
import { initialCarState, State } from './car.state';
import { buildNewCar, driveCar, refuelCar, apiCarLoaded, carLoadError } from './car.actions';

// export const carFeatureKey = 'car';

const brands = [
    'mazda', 'mercedes', 'bmw', 'dodge'
];

// const consumption = (Math.floor(Math.random() * 4) + 7) * 0.01;

export const carReducer = createReducer(initialCarState,
     on(buildNewCar, state => ({
        brand: brands[Math.floor(Math.random() * 4)],
        fuelRemaining: 100,
        consumption: (Math.floor(Math.random() * 4) + 7) * 0.01,
        distanceToGo: 50 + Math.floor(Math.random() * 200),
        distanceRemaining: Math.floor(100 / (state.consumption)),
        errorMsg: ''
     })),
     on(apiCarLoaded, (state, { car } ) => ({
        brand: car.brand,
        fuelRemaining: car.fuel,
        consumption: car.consumption,
        distanceToGo: car.distanceToGo,
        distanceRemaining: calculateRemainingDistance(car.fuel, car.consumption),
        errorMsg: ''
     })),
     on(driveCar, (state, { distance }) => ({
         ...state,
        distanceToGo: state.distanceToGo - distance,
        fuelRemaining: state.fuelRemaining - (distance * state.consumption),
        distanceRemaining: calculateRemainingDistance(state.fuelRemaining, state.consumption)
     })),
     on(refuelCar, (state, { fuelAmount }) => ({
         ...state,
         fuelRemaining: state.fuelRemaining + fuelAmount,
         distanceRemaining: calculateRemainingDistance(state.fuelRemaining + fuelAmount, state.consumption)
     })),
     on(carLoadError, (state, { errorMsg }) => ({
         ...state,
         errorMsg: `${errorMsg.name}: ${errorMsg.message} from ${errorMsg.url}.`,
     }))
);

function calculateRemainingDistance(fuel, consumption) {
    return Math.floor(fuel / (consumption));
}
