import {combineReducers} from 'redux';
import QuanLyKhoaHocReducer from './reducers/QuanLyKhoaHocReducer';
import QuanLyNguoiDungReducer from './reducers/QuanLyNguoiDungReducer';
const rootReducer = combineReducers({
    QuanLyKhoaHocReducer,QuanLyNguoiDungReducer
});
export default rootReducer;