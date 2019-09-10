<template>
<main>
    <Nav />
    <h1>Redovisningstext</h1>
    <h2>Readme for jsramverk</h2>
    <h3>Project start</h3>
    <p>npm install</p>
    <h3>Start app</h3>
    <p>npm run serve</p>
    <h3>Compiles and minifies for production</h3>
    <p>npm run build</p>
    <h3>Lints and fixes files</h3>
    <p>npm run lint</p>
    <a href="https://github.com/freddyph/jsramverk">Repots Github</a>
</main>

</template>

<script>
import Nav from '../../../Nav.vue'
export default {
  name: 'Report',
  components: {
    Nav,
  },
}
</script>
<style>
@import url('https://rsms.me/inter/inter-ui.css');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 100%;
    font-family: 'Inter UI', sans-serif;
}
.app {
    width: 62em;
    margin: 0 auto;
    padding: 2em 6em 8em;
    background-color: #0074d9;
    border-top: 4px solid #0be6d7;
    color: white;
}
h1 {
    font-size: 6em;
    font-weight: 100;
    margin-bottom: 1em;
}
h2 {
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 1em;
}
p {
    font-size: 2em;
    font-weight: normal;
    margin-bottom: 1em;
}
</style>
