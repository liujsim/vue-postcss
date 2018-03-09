<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <div class="ignore">
      ignore
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
:root {
  --color-main:#fff;
  --bg: #fff;
  --bg-enter: #ccc;
}
@custom-selector :--button button, .button;
@custom-selector :--enter :hover, :focus;
@custom-selector :--heading h1, h2, h3, h4, h5, h6;
:--heading {
 font-weight: bold !important;
}
.hello {
  display: flex;
  flex-direction: column;
  background-color: var(--color-main);
}
:--button {
  background-color: var(--bg);
}
:--button:--enter {
  background-color: var(--bg-enter);
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ignore {
  color: aquamarine;
  font-size: 40px;
}
</style>
