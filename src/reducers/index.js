import { combineReducers } from 'redux';
import contacts from './contactReducer';

export default combineReducers({
    contacts: contacts
});