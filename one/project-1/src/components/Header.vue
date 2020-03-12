<template>
  <header>
	  <h1>{{title}}</h1>
  </header>
</template>

<script>
import {bus} from '../main'; 
export default {
  data () {
    return {
     title: 'Ninjas Lists' 
    }
  },
  methods: {
	  changeTitle() {
		  bus.$emit('titleChanged', 'Vue wiards')
	  }
  },
}
</script>

<style scoped> 
	header {
		padding: 10px;
		background: lightgreen;
	}
	h1 {
		text-align: center 
	}
</style>
