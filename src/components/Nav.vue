<template>
<nav>
    <ul>
        <li><router-link to="/">Me</router-link></li>
        <li><router-link to="/forms">Form</router-link></li>
        <li><router-link to="/reports/week/1">kmom01</router-link></li>
        <li><router-link to="/reports/week/2">kmom02</router-link></li>
    </ul>
</nav>
</template>

<script>
export default {
  name: 'Me',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    text-align: center;
}
li {
    display: inline;
    margin-right: 1em;
}
li a {
    text-decoration: none;
    color: white;
    font-size: 1.4em;
}
li a:hover {
    text-decoration: underline;
}
</style>
