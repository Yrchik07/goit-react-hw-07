import { configureStore } from '@reduxjs/toolkit'
import {contactsReducer} from '../redux/contactsDetailsSlice'
// import { contactsReducer } from './contactsSlice'
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from "redux-persist";
//   import storage from "redux-persist/lib/storage";
import { filtersReducer } from './filtersSlice';
// import { contactsDetailsReducer } from './contactsDetailsSlice';
  
  // const contactsPersistConfig = {
  //   key: "contacts",
  //   storage,
  // };

  
  // const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
        // fetchContacts: fetchContactsReducer,
    },
    // middleware: getDefaultMiddleware =>
    // getDefaultMiddleware({
    //   serializableCheck: 
    //    {
    //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //   },
    // }),
})

// export const persistor = persistStore(store);
