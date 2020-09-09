import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { composeWithDevTools } from "redux-devtools-extension";
import firebase from "../config/firebase";
import thunk from "redux-thunk";

const rrfConfig = {
  userProfiles: "users",
  attachAuthIsReady: true,
  useFirestoreForProfile: true,
};

export function configureStore() {
  const middlewares = [thunk.withExtraArgument({ getFirebase, getFirestore })];

  const composedEnhancer = composeWithDevTools(
    applyMiddleware(...middlewares),
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
  );

  const store = createStore(rootReducer, composedEnhancer);

  return store;
}
