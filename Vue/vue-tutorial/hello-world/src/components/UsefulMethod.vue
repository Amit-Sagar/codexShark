<template>
  <div>
    <p>{{ 2 + 5 + 6 }}</p>
    <p>{{ 23 + 54 + 12 }}</p>
    <p>Add Method - {{ add(23, 3, 23) }}</p>
    <p>Add Method - {{ add(232, 33, 231) }}</p>
    <p>Multiply Method - {{ multiplier(10) }}</p>
    <p>Multiply Method - {{ multiplier(baseValue) }}</p>
  </div>
</template>

<script>
export default {
  name: "UsefulMethod",
  data() {
    return {
      baseMultiplier: 5,
      baseValue: 2,
    };
  },
  methods: {
    add(a, b, c) {
      return a + b + c;
    },
    multiplier(num) {
      return num * this.baseMultiplier;
    },
  },
};
</script>