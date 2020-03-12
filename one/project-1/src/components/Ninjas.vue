<template>
  <div id="ninjas">
	  <ul>
		  <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show" :key="ninja">
			  <h2>{{ninja.name}} </h2>
			  <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
		  </li>
	  </ul>
	  <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>

export default {
	 props: ['ninjas'],
  data () {
    return {
    
    }
  },
  methods: {
	  deleteNinja: function() {
		  this.ninjas.pop()
	  }
  },
}
</script>

<style scoped> 

	#ninjas ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex
	}
	#ninjas ul li {
    border: 1px solid green;
    justify-content: space-between;
    width: 100%;
    margin: 20px;
    text-align: center;
	cursor: pointer;
	border-radius: 3px;
	}
	#ninjas ul li:hover {
		background: lightgreen;
	}
	h3 {
		color: #4a4a4a;
		font-weight: 300;
	}
</style>
