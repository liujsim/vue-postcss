<template>
<div class="item-list">
  <a href="http://zihua.li/2013/12/keep-height-relevant-to-width-using-css/">纯 CSS 实现高度与宽度成比例的效果</a>
  <p>一个元素的 padding，如果值是一个百分比，那这个百分比是相对于其父元素的宽度而言的，即使对于 padding-bottom 和 padding-top</p>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      desc: '在保持 item 元素宽高比恒定（如高是宽的 1.618 倍）的情况下，使得 item 元素可以和父元素同比缩放'
    }
  },
  computed: {
  },
  methods: {
  },
  created () {

  },
  mounted () {

  }
}
</script>
<style lang="postcss" scoped>
.item-list {
  & .item {
    float: left;
    margin: 10px 5%;
    padding-bottom: 33.98%; /* 21%*1.618 */
    width: 21%;
    height: 0;
    background-color:#C8E584;
  }
}
</style>
