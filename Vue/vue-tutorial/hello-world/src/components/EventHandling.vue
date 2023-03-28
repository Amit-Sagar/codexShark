<template>
  <div>
    <h2>{{ name }}</h2>
    <div>
      <button v-on:click="name = 'Siddiqui'">Change Name</button>
    </div>
    <h2>{{ count }}</h2>
    <div>
      <button v-on:click="decrement(1)">Decrement</button>
      <button v-on:click="increment(1)">Increment</button>
      <button v-on:click="decrement(5)">Decrement</button>
      <button v-on:click="increment(5)">Increment</button>
      <button v-on:click="count -= 1">Decrement</button>
      <button v-on:click="count += 1">Increment</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "EventHandling",
  data() {
    return {
      name: "faizan",
      count: 0,
    };
  },
  methods: {
    increment(num) {
      this.count += num;
    },
    decrement(num) {
      this.count -= num;
    },
  },
};
</script>