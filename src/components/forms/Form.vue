<template>
<main>
    <Nav />
    <h1>Sida för formulär</h1>
    <h2>Ett enkelt formulär.</h2>
    <form
      id="form"
      @submit="formCheck"
      action="localhost"
      method="post"
    >

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors"  v-bind:key="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Namn</label><br>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          min="1"
          class="input-field"
        >
      </p>

      <p>
        <label for="email">E-post</label><br>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="input-field"
        >
      </p>

      <p>
        <label for="password">Lösenord</label><br>
        <input
          id="password"
          v-model="password"
          type="password"
          name="password"
          class="input-field"
        >
      </p>
      <p>
      <label for="age">Födelsedag</label><br>
        <select name="year" v-model="yearSelected" required>
            <option disabled value="">År</option>
            <option v-for="(n,index) in 100" :key="index" :value="date.getFullYear()-index">{{ date.getFullYear()-index }}</option>    
        </select>
        <select name="month" v-model="monthSelected" required>
            <option disabled value="">Månad</option>
            <!-- <optgroup label="månader"> -->
                <!-- <option v-for="month in monthSelected" :key="month" :value="month">{{ month }} </option> -->
                <option v-for="month in 12" :key="month" :value="month"> {{ month }} </option>
            <!-- </optgroup> -->
        </select>
        <select name="day" v-model="daySelected" required>
            <option disabled value="">Dag</option>
            <!-- <option v-for="day in getDaysInMonth(yearSelected, monthSelected)" :key="day" :value="('00' + day).slice(-2)">{{ ("00" + day).slice(-2) }}</option> -->
            <option v-for="day in 31" :key="day" :value="day"> {{ day }}  </option>
        </select><br>
      </p>
      <p>
        <input class="button" type="submit" value="Submit">
      </p>

    </form>
</main>
</template>

<script>
import Nav from '../Nav.vue'
export default {
    name: 'Form',
    components: {
    Nav,
    },
    data() {
        return {
        date: new Date(),
        errors: [],
        name: null,
        age: null,
        email: null,
        password: null,
        yearSelected: '',
        monthSelected: [" december "," november "," oktober ", " september ", " augusti ", " juli ", " juni", " maj ", " april ", " mars ", " februari ", " januari "],
        daySelected: [" 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", " 10 ", " 11 ", " 12 ", " 13 ", " 14 ", " 15 ", " 16 ", " 17 ", " 18 ", " 19 ", " 20 ", " 21 ", " 22 ", " 23 ", " 24 ", " 25 ", " 26 ", " 27 ", " 28 ", " 29 ", " 30 ", " 31 "],
        months: '',
        month: ''
        };
    },
    methods:{
        formCheck: function (e) {
            if (this.name && this.age && this.email && this.password) {
                return true;
            }

            this.errors = [];

            if (!this.name) {
            this.errors.push('Name required.');
            }
            if (!this.email) {
            this.errors.push('Email required.');
            }
            if (!this.password) {
            this.errors.push('Password required.');
            }

            e.preventDefault();

                   
        },
        formReady: function(){
              if (formCheck()) {
                  alert("Tack för din medverkan, din data skickas nu vidare för försäljning.");
            }
        }
               
        
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    background: black;
    color: gold;
    margin-left: 10px;
}
img {
    margin: auto;
    max-width: 60%;
}
p {
    margin-bottom: 1em;
}

.input-label {
    display: block;
}

.input-field {
    width: 100%;
    font-size: 20px;
}

label {
    font-size: 20px;
    
}

.input-field:focus {
    border: 5px solid green;
}
input.button {
    font-size: 1em;
    border: 3px solid gold;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 1px 1px 1px 1px;
}

@media (min-width: 760px) {
    .input-field {
        width: 50vw;
    }
}
</style>
