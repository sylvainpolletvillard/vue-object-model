<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Hello {{ name }}</h1>
    <button v-on:click="counter += 1">{{ counter }}</button>
  </div>
</template>

<script>
	import { Model } from 'objectmodel'

	const Integer = Model(Number).assert(Number.isInteger)

	export default {
		name: 'app',
		model: {
			name: String,
			counter: Number
		},
        data(){
			return {
				name: "Vue",
                counter: 0
            }
        }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
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
</style>
