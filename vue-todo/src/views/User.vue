<template>
  <div>
    {{food}}
    <p>{{userName}} -> {{userNameletter}}</p>
    <p>{{appName }} -> {{appNamefirst}}</p>
    <el-button @click="handlechange">提交修改</el-button>
    <el-button @click="usernamechange">异步修改username</el-button>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import { getuser } from '../api/user'
export default {
  props: {
    food: {
      default: 'apple',
      type: String
    }
  },
  computed: {
    ...mapState(['userName']), // 根路径store下的state状态
    ...mapState({ appName: state => state.user.appName }), // user模块下的state状态
    ...mapGetters(['userNameletter', 'appNamefirst'])
  },
  methods: {
    handlechange () {
      this.$store.commit(
        'SET_NAME', 'f66'
      )
    },
    usernamechange () {
      this.$store.dispatch('updatausername', 'is123')
    }
  },
  created () {
    getuser({ userid: 13 }).then((res) => {
      console.log(res)
    // eslint-disable-next-line handle-callback-err
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>
