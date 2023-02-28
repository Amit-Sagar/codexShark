import { put, takeEvery } from "redux-saga/effects";

function* getData(info) {
  let data = yield fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${info.query}&units=metric&appid=167d7a33bcef558be744e07968b3505e`
  );
  data = yield data.json();
  // console.log("saga", data);
  yield put({ type: "SET_WEATHER_DATA", data });
}

function* weatherSaga() {
  yield takeEvery("WEATHER_DATA", getData);
}

export default weatherSaga;
