import React from 'react'
import {render} from '@testing-library/react'
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
// As a basic setup, import your same slice reducers
import users from '../reducers/users'
import {BrowserRouter as Router} from "react-router-dom";
import {authedUser} from "../reducers/authedUser";

export function renderWithProviders(
        ui,
        {
            preloadedState = {},
            // Automatically create a store instance if no store was passed in
            store = configureStore({reducer: {authedUser, users}, preloadedState}),
            ...renderOptions
        } = {}
    ) {
        function Wrapper({children}) {
            console.log(store);
            return <Provider store={store}><Router>{children}</Router></Provider>
        }

        // Return an object with the store and all of RTL's query functions
        return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
    }
