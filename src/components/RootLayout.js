import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import {Provider} from 'react-redux';
import { store } from '../redux/store';

const RootLayout = () => {
    return (
        <Provider store = {store}>
            <div>
                <NavBar/>
                <main>
                    <Outlet/>
                </main>
            </div>
        </Provider>

    );
}

export default RootLayout;
