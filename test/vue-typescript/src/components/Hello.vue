<template>
	<div>
		<img src="../assets/logo.png">
		<h1>Hello {{ name }}</h1>
		<button v-on:click="counter += 1">{{ counter }}</button>
	</div>
</template>

<script lang="ts">
	import { Vue, Component, Prop } from 'vue-property-decorator'
	import { Model } from 'objectmodel'

	const Integer = Model(Number).assert(Number.isInteger)

	@Component({
		components: { }
	})
	export default class Hello extends Vue {
		@Prop() counter: number;

		model = {
			name: String,
			counter: Integer.defaultTo(0)
		}
	}
</script>

<style scoped>
	h1 {
		text-align: center;
	}
</style>