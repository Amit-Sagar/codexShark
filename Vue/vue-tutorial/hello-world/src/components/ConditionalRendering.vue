<template>
  <div>
    <p>Vue provides four directives for conditional rendering</p>
    <h2>1. v-if</h2>
    <h2>2. v-else-if</h2>
    <h2>3. v-else</h2>
    <h2>4. v-show</h2>
    <p v-if="num === 0">The number is zero (v-if)</p>
    <p v-else-if="num > 0">The number is positive (v-else-if)</p>
    <p v-else-if="num < 0">The number is negative (v-else)</p>
    <p v-else>Not a Number</p>
    <div v-if="display">
      <p>Faiz</p>
      <p>Learining</p>
      <p>Vue</p>
    </div>
    <p v-show="showElement">Rendering a element (v-show)</p>
  </div>
</template>

<script>
export default {
  name: "ConditionalRendering",
  data() {
    return {
      num: 4,
      display: true,
      showElement: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
