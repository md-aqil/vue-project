<template>
  <footer>
	  <p>{{copyright}}</p>
  </footer>
</template>

<script>
import {bus} from '../main'; 	
export default { 

  data () {
    return {
		copyright: 'Copyright@2016.mysite.com'
    }
  }
}
</script>

<style> 
	footer {
		background: #333;
		color: lightgreen;
		padding: 10px;
		text-align: center;
	}
</style>
