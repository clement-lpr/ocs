<template>
  <router-link to="/">
    <img alt="Vue logo" src="./assets/ocs.png" />
  </router-link>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  margin-bottom: 16px;
}

#app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: HelveticaNeueLTStd-Roman, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #4a4a4a;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #ff7200;
}

#nav a.router-link-exact-active {
  color: #ff7200;
}
</style>
