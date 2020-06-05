<template>
  <div class="app">
    <hello></hello>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: { Hello },
}
</script>

<style>
.app {
  text-align: center;
  font-family: sans-serif;
  width: 400px;
  margin: 50px auto;
}
</style>