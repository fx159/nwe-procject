/* eslint-disable no-labels */
<template>
  <div>
   <span :id='elId'></span>
  </div>
</template>
<script>
import countup from 'countup'
export default {
  name: 'count-to',
  data () {
    return {
      elId: `count-${this._uid}`,
      count: {}
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    duration: {
      type: Number,
      default: 1000
    }
  },
  // mounted是在DOM挂载之后触发的函数
  mounted () {
    // 等视图渲染完成之后再调用此函数，确定DOM和视图都渲染完之后触发
    this.$nextTick(() => {
      // eslint-disable-next-line new-cap
      this.count = new countup(this.elId, this.startVal, this.endVal)
      console.log(this.count, this.endVal)
      setTimeout(() => {
        this.count.start()
      }, this.duration)
    })
  }
}
</script>
