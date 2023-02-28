export const weatherReducer = (data = [], action) => {
  if (action.type == "SET_WEATHER_DATA") {
    // console.log("SearcgDAta:", action.data);
    return action.data;
  } else {
    // console.log(data);
    return data;
  }
};
