import { configureStore } from '@reduxjs/toolkit';
import reducer from './commands';

export default function () {
    return configureStore({ reducer });
};

