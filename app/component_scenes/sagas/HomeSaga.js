
import {HomeService} from '../services/HomeService';


export function* watchSavetodatabase() {
//  here we check if all asynchronous call get result or not
// It also changes the actiontypes with which ui changes accordingly in component
yield call(HomeService.savetodatabase);

}