<template>
  <div>
    <!-- moustache syntax -->
    <p>Hello {{ name }}</p>
    <p>{{ greeting }} {{ name1 }}</p>

    <!-- v-text directory syntax -->
    <p v-text="content"></p>

    <!-- v-html directory (for html tag)-->
    <p v-html="bold"></p>
    <p v-html="italic"></p>

    <!-- v-bind directory (to bind the attributes) -->
    <p v-bind:id="headingID">I am also good</p>
    <button v-bind:disabled="isDisabled">Bind</button>

    <!-- class -->
    <p class="underline">Underline Text</p>
    <p v-bind:class="status">Status</p>

    <!-- conditional class -->
    <p v-bind:class="isPromoted && 'promoted'">Promoted Movie</p>
    <p v-bind:class="isSoldOut ? 'sold-out' : 'new'">Soldout movie</p>
    <p v-bind:class="isSoldOut1 ? 'sold-out' : 'new'">New Movie</p>

    <!-- array class -->
    <p v-bind:class="['new', 'promoted']">Array Class</p>
    <p
      v-bind:class="[isPromoted && 'promoted', isSoldOut ? 'sold-out' : 'new']"
    >
      Array Conditional Movie
    </p>
    <p
      v-bind:class="{
        promoted: isPromoted,
        new: !isSoldOut,
        'sold-out': isSoldOut,
      }"
    >
      Object Conditional Movie
    </p>

    <!-- style -->
    <p
      v-bind:style="{
        color: highLighColor,
        padding: '20px',
        fontSize: textSize + 'px',
      }"
    >
      Inline Style
    </p>
    <p v-bind:style="styleObject">Object Style</p>
    <div v-bind:style="[baseStyleObject, successStyleObject]">
      Array Style Success
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Faiz",
      greeting: "Hi",
      name1: "Batman",
      content: "How are you",
      bold: `<b>I'm good</b>`,
      italic: `<i>What about you</i>`,
      headingID: "headind",
      isDisabled: false,
      status: "success",
      isPromoted: true,
      isSoldOut: true,
      isSoldOut1: false,
      highLighColor: "orange",
      textSize: 50,
      styleObject: {
        color: "orange",
        fontSize: "50px",
        padding: "20px",
      },
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },
      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
      },
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
.underline {
  text-decoration: underline;
}
.promoted {
  text-decoration: underline;
}
.sold-out {
  color: red;
}
.new {
  color: green;
}
</style>
