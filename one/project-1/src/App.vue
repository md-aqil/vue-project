<template>
  <div>
   <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
  },
  data () {
    return {
    
    }
  },
  methods: {
 
  },
}
</script>

<style lang="">
  body {
    margin: 0;
    padding: 0;
    font-family:Arial, Helvetica, sans-serif;
  }
  
  	body {
			background: #eee;
		}
		button {
			background: #7777fd;
			    border: none;
			    color: #fff;
			    padding: 15px 45px;
			    font-size: 17px;
			    outline: none;
			    border-radius: 3px;
			    font-family: Roboto;
			    letter-spacing: 1.5px;
			    font-weight: 400;
			    cursor: pointer;
  				transition: all 0.1s cubic-bezier(.25,.8,.25,1);
			   box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
		}
		button:hover {
			box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
		}
		button:active {
			  box-shadow: inset 1px 3px 10px rgba(0, 0, 0, 0.55);
			 /*transform: scale(0.9);*/
		}
		button[primary] {
            background: -webkit-linear-gradient(top right,#5170d6,#5153d6);
		}
		button[warning] {
            background: #eaa038;
            background: -webkit-linear-gradient(top left,#eaa038,#e0a069);
		}
		button[danger] {
            background: #ff5300;
            background: -webkit-linear-gradient(top left,#de4800,#d80000)
		}
		button[success] {
            background:-webkit-linear-gradient(bottom left,#73ce31,#13a800);
		}
		button[dark] {
            background: -webkit-linear-gradient(bottom right,#304352,#162851);
		}
		button[secondry] {
            background: -webkit-linear-gradient(bottom right,#2196F3,#1976D2);
		}	
		button[darnger2] {
            background: -webkit-linear-gradient(bottom right,#D84315,#BF360C);
		}
	button[purple] {
            background: -webkit-linear-gradient(bottom right,#7E57C2,#673AB7);
		}
    .card-view {
	 box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 22px;
    margin-bottom: 20px;
	background: #fff;
}
.container {
  width: 80%;
  margin: auto;
}
p {
  color: #4a4a4a;
    font-weight: 400;
    line-height: 1.5;
}
h4 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}
</style>
 