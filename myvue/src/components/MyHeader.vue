<template>
    <div>
      <h1>这是MyHeader组件</h1>
      <router-link :to="{path:'/zj1'}">组件1</router-link>
      <router-link :to="{path:'/zj2'}">组件2</router-link>
      <router-link :to="{path:'/zj3'}">组件3</router-link>
    </div>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>

</style>
