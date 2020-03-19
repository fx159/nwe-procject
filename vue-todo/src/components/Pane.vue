<template>
  <div class="pane-wrap" ref="trigger">
    <div class="pane pane-left" :style="{width:setpaneoffset}"></div>
    <div class="pane pane-trigger" :style="{left:settriggerwidth, width: `${triggerwidth}px`}" @mousedown="handlemousedown" ></div>
    <div class="pane pane-right" :style="{left:setpaneoffset}"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      offsetleft: 20,
      triggerwidth: 8,
      tag: false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    setpaneoffset () {
      return `${this.offsetleft}%`
    },
    settriggerwidth () {
      console.log(`calc(${this.offsetleft}%-${this.triggerwidth / 2}px)`)
      return `calc(${this.offsetleft}% - ${this.triggerwidth / 2}px)`
    }
  },
  methods: {
    handlemousedown (event) {
      document.addEventListener('mousemove', this.handlmousemove)
      document.addEventListener('mouseup', this.handlmouseleave)
      this.tag = true
    },
    handlmousemove (event) {
      if (!this.tag) return
      this.offsetleft = (event.pageX - this.$refs.trigger.getBoundingClientRect().left) / this.$refs.trigger.getBoundingClientRect().width * 100
      console.log(this.offsetleft)
    },
    handlmouseleave () {
      this.tag = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .pane-wrap{
    width: 400px;
    height: 400px;
    position: relative;
    background-color: blue;
    .pane{
      height: 100%;
      position: absolute;
      &-left{
        top:0;
        background-color: red;
      }
      &-right{
        top:0;
        right: 0;
        bottom: 0;
        background-color: pink;
      }
      &-trigger{
        background-color: black;
        z-index: 10;
      }
    }
  }
</style>
