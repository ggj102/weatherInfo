const GLOBAL_LON = 'GLOBAL_LON';
const GLOBAL_LAT = 'GLOBAL_LAT';

export const gLon = lonVal =>({type:GLOBAL_LON, lonVal});
export const gLat = latVal =>({type:GLOBAL_LAT, latVal});

const initialState = {
    gLonState: '',
    gLatState: ''
}

export default function GlobalData(state = initialState, action){
    switch(action.type)
    {
        case GLOBAL_LON:
            return{
                ...state,
                gLonState: action.lonVal
            }
        case GLOBAL_LAT:
            return{
                ...state,
                gLatState: action.latVal
            }
        default:
            return state;
    }
}