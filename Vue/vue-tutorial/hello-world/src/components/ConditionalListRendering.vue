<template>
  <h1>Conditional List Rendering</h1>
  <div v-for="name in names" :key="name">
    <h4 v-if="name === 'Faizan'">{{ name }}</h4>
  </div>
</template>

<script>
export default {
  name: "ConditionalListRendering",
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