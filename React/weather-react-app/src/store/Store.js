import { configureStore } from "@reduxjs/toolkit";
import { weatherReducer } from "./WeatherReducer";
import createSagaMiddleware from "redux-saga";
import weatherSaga from "./WeatherSaga";

const sagaMidleware = createSagaMiddleware();
const store = configureStore({
  reducer: { weatherReducer },
  middleware: () => [sagaMidleware],
});

sagaMidleware.run(weatherSaga);

export default store;
