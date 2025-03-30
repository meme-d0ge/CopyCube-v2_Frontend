import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {setupListeners} from "@reduxjs/toolkit/query";
import authSlice, {api} from "@/shared/api";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    auth: authSlice,
    [api.reducerPath]: api.reducer,
})

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['api']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store =  configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(api.middleware),
    devTools: true,
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch