export const exerciseOptions = {
  method: "GET",
  // params: { muscle: "biceps" },
  headers: {
    "X-RapidAPI-Key": "aa6ad99f13mshf0e6f28b0d76202p12ec32jsn7211b353d79a",
    "X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};

export const exerciseData = [
  {
    name: "all",
    image:
      "https://www.aleanlife.com/wp-content/uploads/2020/11/arm-workout-with-dumbbells-at-home-490x207.jpg",
  },
  {
    name: "back",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2124438/image_iphone.jpg",
  },
  {
    name: "cardio",
    image:
      "https://www.shutterstock.com/image-vector/muscular-sport-man-running-on-260nw-1295951278.jpg",
  },
  {
    name: "chest",
    image:
      "https://aleanlife.com/wp-content/uploads/2014/01/chest-incline-dumbbellpress-3-490x410.jpg",
  },
  {
    name: "lower arms",
    image:
      "https://www.aleanlife.com/wp-content/uploads/2020/11/arm-workout-with-dumbbells-at-home-490x207.jpg",
  },
  {
    name: "lower legs",
    image:
      "https://i.shgcdn.com/eed01c43-1cf1-4ab5-bc04-5d1b665acc44/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
  },
  {
    name: "neck",
    image:
      "https://cdn.shopify.com/s/files/1/1497/9682/files/3_251904dc-1cca-4913-b258-4ec90e9b6f3b.jpg?v=1638368654",
  },
  {
    name: "shoulders",
    image:
      "https://staticg.sportskeeda.com/editor/2022/12/92330-16703958032182-1920.jpg",
  },
  {
    name: "upper arms",
    image:
      "https://fitnessvolt.com/wp-content/uploads/2021/06/dumbbell-hammer-curls.jpg",
  },
  {
    name: "upper legs",
    image:
      "https://gymvisual.com/6082/lever-seated-squat-calf-raise-on-leg-press-machine.jpg",
  },
  {
    name: "waist",
    image:
      "https://i.pinimg.com/originals/7b/1e/9a/7b1e9a2a0e96cfe569603ad25c4e311c.jpg",
  },
];

export const fullExerciseData = [
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
  {
    id: "53",
    name: "band fixed back close grip pulldown",
    bodyPart: "back",
    muscleTarget: "lats",
    equipmentUsed: "band",
    image: "https://cdn.exowatts.com/images/exercises/53.gif",
  },

  {
    id: "1234",
    name: "stalder press",
    bodyPart: "upper-arms",
    muscleTarget: "triceps",
    equipmentUsed: "body-weight",
    image: "https://cdn.exowatts.com/images/exercises/1234.gif",
  },

  {
    id: "724",
    name: "dumbbell standing reverse curl",
    bodyPart: "upper-arms",
    muscleTarget: "biceps",
    equipmentUsed: "dumbbell",
    image: "https://cdn.exowatts.com/images/exercises/724.gif",
  },
];
