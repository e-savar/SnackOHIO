import {configureStore, getDefaultMiddleware, combineReducers} from '@reduxjs/toolkit'
import {
    persistReducer,
    persistStore,
    createMigrate,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import userReducer from './reducers/user'

const persistConfig = {
    key: 'snackohio',
    version: 1,
    storage,
    blacklist: ['zoom'],
    stateReconciler: autoMergeLevel2,
}

const persistedRootReducer = persistReducer(
    persistConfig,
    combineReducers({
        user: userReducer
    })
)

const store = configureStore({
    reducer: persistedRootReducer,
    devTools: true,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    })
})



const persistor = persistStore(store)

export { store, persistor}