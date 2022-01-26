<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div id="yourContainer"></div>
    <!-- <router-view /> -->
  </div>
</template>
<script>
import { registerMicroApps, start, loadMicroApp, prefetchApps } from "qiankun";

export default {
  mounted() {
    registerMicroApps([
      {
        name: "react app", // app name registered
        entry: "//localhost:8082",
        container: "#yourContainer",
        activeRule: "#/about",
      },
      // {
      //   name: "vue app",
      //   entry: { scripts: ["//localhost:7100/main.js"] },
      //   container: "#yourContainer2",
      //   activeRule: "/yourActiveRule2",
      // },
    ]);

    prefetchApps([{
        name: "react app", // app name registered
        entry: "//localhost:8082",
        container: "#yourContainer",
        activeRule: "#/about",
    }])
    //     const MicroApp = loadMicroApp({
    //     name: "react app", // app name registered
    //     entry: "//localhost:8082",
    //     container: "#yourContainer",
    //     activeRule: "#/about",
    // })
    // console.log(MicroApp)
    // MicroApp.bootstrapPromise();
    start();
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
