/****************************************************
* Purpose: Contains the Redux store
*****************************************************/

import { configureStore } from '@reduxjs/toolkit';
import reducer from './storeReducer';

export default function () {
    return configureStore({ reducer });
};

