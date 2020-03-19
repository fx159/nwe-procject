<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>subment</el-button>
    <h1>{{food}}</h1>
    <counto :endVal='endVal'></counto>
  </div>
</template>
<script>
import counto from '../components/CountTo.vue'
export default {
  data () {
    return {
      endVal: 100
    }
  },
  props: {
    food: {
      default: 'apple',
      type: String
    }
  },
  components: {
    counto
  }
}
</script>
