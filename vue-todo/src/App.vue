<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about/food">About</router-link>
      <router-link to="/pane">Pane</router-link>
      <router-link to="/user">user</router-link>
    </div>
    <transition-group name='router' >
    <router-view key='default'/>
    </transition-group>
  </div>
</template>

<style lang="scss">
.router-enter{
 opacity: 0;
}
.router-enter-active{
 transition: opacity 1s ease;
}
.router-enter-to{
  opacity: 1;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      routercss: ''
    }
  },
  methods: {
    handlerclick () {
      this.$router.push({
        path: '/about'
      })
    }
  }

}
</script>
