<template>
  <h1>For-of Directive</h1>
  <p v-for="name in names" :key="name">{{ name }}</p>
  <p v-for="(name1, index) in names" :key="name1">{{ index }}{{ name1 }}</p>
  <p v-for="name2 in fullNames" :key="name2.first">
    {{ name2.first }} {{ name2.last }}
  </p>
  <div v-for="actor in actors" :key="actor.name">
    <h4>{{ actor.name }}</h4>
    <p v-for="movie in actor.movies" :key="movie">{{ movie }}</p>
  </div>
  <p v-for="value in myInfo" :key="value">{{ value }}</p>
  <p v-for="(value, key, index) in myInfo" :key="value">
    {{ index }} {{ key }} {{ value }}
  </p>
  <template v-for="name4 in names" :key="name4">
    <p>{{ name4 }}</p>
    <hr />
  </template>
</template>

<script>
export default {
  name: "ListRendering",
  data() {
    return {
      names: ["Nilesh", "Mohit", "Faizan"],
      fullNames: [
        { first: "Bruce", last: "Wayne" },
        { first: "Clark", last: "Kent" },
        { first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christian Bale",
          movies: ["Batman", "The Prestige"],
        },
        {
          name: "Di Caprio",
          movies: ["Titanic", "Inception"],
        },
      ],
      myInfo: {
        name: "Faizan",
        channel: "Code Learing",
        course: "Vue 3",
      },
    };
  },
};
</script>