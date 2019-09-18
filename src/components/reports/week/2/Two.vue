<template>
<main>
    <Nav />
    <h1>Redovisningstext kmom02</h1>
    <h2>Inspiration för datepicker</h2>
    <p>Jag skapade formulärets grund via länken från kurssidan,
    https://vuejs.org/v2/cookbook/form-validation.html. Här fick jag starten
    för date-pickern som innehöll det som jag tycker är viktigt, dvs att du kan
    både skriva och välja datum. </p>
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
