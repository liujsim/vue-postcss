<template>
  <div id="app">
    <div aspectratio w-16-9>
        <div aspectratio-content></div>
    </div>
    <p :class="$style.red">
      This should be red
    </p>
     <p :class="{ [$style.red]: isRed }">
      Am I red?
    </p>
    <p :class="[$style.red, $style.bold]">
      Red and bold
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created () {
    console.log(this.$style.red)
    // -> "_1VyoJ-uZOjlOxP7jWUy19_0"
    // an identifier generated based on filename and className.
  },
  data () {
    return {
      isRed: '233'
    }
  },
  methods: {

  }
}
</script>

<style lang="postcss" module>
:root {
  --color-main:#7498FB;
  --bg: #fff;
  --bg-enter: #ccc;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  & img {
    height: 100px;
  }
}

[aspectratio] {
  position: relative;
}
[aspectratio]::before {
  content: '';
  display: block;
  width:1px;
  margin-left:-1px;
  height: 0;
}
[aspectratio-content] {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
[w-16-9] {
  width: 300px;
  background-color: bisque;
}
[w-16-9] {
  aspect-ratio:'3:1'; /* 只能单独写 */
}

/* css module */

.red {
  color: red;
}
.bold {
  font-weight: bold;
}

</style>
