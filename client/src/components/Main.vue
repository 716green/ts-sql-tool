<template>
  <div class="main">
    <h1>TS-SQL</h1>
    <div class="characters">
      <h3>Characters</h3>
      <div class="sendData">
        <div v-for="person in this.people" :key="person.id" class="data">
          {{ person }}
        </div>
      </div>
      <br />
      <div class="places">
        <h3>Place</h3>
        <div v-for="place in this.places" :key="place.id" class="data">
          {{ place }}
        </div>
      </div>
      <div class="buttons">
        <br />
        <button class="btn blue" @click="this.sendData">Send Data</button>
      </div>
      <hr />
      <div class="results">
        {{ this.allSimpsons }}
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  name: "Main",
  data() {
    return {
      allSimpsons: {},
      people: [
        { id: 1, firstName: "Bart", lastName: "Simpson", isChild: true },
        { id: 2, firstName: "Lisa", lastName: "Simpson", isChild: true },
        { id: 3, firstName: "Maggie", lastName: "Simpson", isChild: true },
        { id: 4, firstName: "Marge", lastName: "Simpson", isChild: false },
        { id: 5, firstName: "Homer", lastName: "Simpson", isChild: false },
        { id: 6, firstName: "Montgomery", lastName: "Burns", isChild: false },
        { id: 7, firstName: "Whelan", lastName: "Smithers", isChild: false },
        {
          id: 8,
          firstName: "Nillhouse",
          lastName: "Van Houten",
          isChild: true,
        },
        { id: 9, firstName: "Nelson", lastName: "Muntz", isChild: true },
        { id: 10, firstName: "Principal", lastName: "Skinner", isChild: false },
      ],
      places: [
        { name: "Springfield Elementary", ownerId: 10, isActive: true },
        { name: "Nuclear Power Plant", ownerId: 6, isActive: true },
        { name: "Evergreen Terrace", ownerId: 4, isActive: true },
        { name: "Monorail", ownerId: 8, isActive: false },
        { name: "Treehouse of Horror", ownerId: 1, isActive: true },
        { name: "Playground", ownerId: 9, isActive: true },
      ],
    };
  },
  methods: {
    sendData() {
      let url = "http://localhost:3000/api/sql";
      let params = {
        people: this.people,
        places: this.places,
      };
      axios
        .post(url, params)
        .then((res) => {
          this.allSimpsons = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 500;
}
h3 {
  margin: auto;
  display: flex;
  padding: 1% 3%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.data {
  margin: auto;
  display: flex;
  padding-left: 5%;
}
.btn {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.green {
  background-color: #4caf50;
} /* Green */
.blue {
  background-color: #008cba;
} /* Blue */
.red {
  background-color: #f44336;
} /* Red */
.gray {
  background-color: #e7e7e7;
  color: black;
} /* Gray */
.black {
  background-color: #555555;
} /* Black */
</style>
