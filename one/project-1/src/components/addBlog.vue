 <template>
  <div id="add-blog">
   <h2>Add a new Blog</h2>
   <form v-if="!submitted">
	   <div class="form-group">
		   <label for="">Blog Title:</label>
		   <input class="form-control" type="text" v-model.lazy="blog.title" required>
	   </div>
	  
	     <div class="form-group">
		   <label for="">Blog Content:</label>
		 	<textarea v-model.lazy ="blog.content"></textarea>
	   </div>
	   <div class="form-group">
		   <div id="checkboxes">
			   <label>Ninja
				   <input type="checkbox" value="ninja" v-model="blog.categories">
			   </label>
			   <label>Wizard
				     <input type="checkbox" value="wizard" v-model="blog.categories">
			   </label>
			   <label>Mario
				   <input type="checkbox" value="mario" v-model="blog.categories">
			   </label>
			   <label>Cheese
				    <input type="checkbox" value="cheese" v-model="blog.categories">
			   </label>
		   </div>
	   </div>
	   <div class="form-group">
		   <label>Author</label>
		   <select class="form-control" v-model="blog.author">
			   <option value="">Select Author</option>
			   <option v-for="author in authors" :key="author">
				   {{author}}
			   </option>
		   </select>
	   </div>
	   <div class="form-group">
		   <button v-on:click.prevent="post">Add Blog</button>
	   </div>
   </form>
   <div class="msg-success" v-if="submitted">
	   Cool 
   </div>
   <div id="preview">
	   <h2>Preview Blog</h2>
	   <p>Blog Title: {{blog.title}}</p>
	   <p>Blog Content: {{blog.content}}</p>
	   <p>Blog categories:</p>
	   <p>Author: {{blog.author}}</p>
		<ul>
			<li v-for="category in blog.categories" :key="category">
				{{category}}
			</li>
		</ul>
   </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
		blog: {
			title: '',
			content: '',
			categories: [],
			author: '',
		},
		authors: ['the max minja', 'the vew owesome', 'dont know angular'],
		submitted: false,
    }
  },
  methods: {
	post: function() {
		 this.$http.post('https://jsonplaceholder.typicode.com/posts', {
			  title: this.blog.title,
			  body: this.blog.content,
			  userid: 1,
		 }).then(function(data) {
			  console.log(data);
			  this.submitted = true
		 });
	}
  },
}
</script>

<style>
.card-view {
	 box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 22px;
    margin-bottom: 20px;
	background: #fff;
	border: 1px solid salmon;
}
	#add-blog {
		width: 500px;
		margin: 50px auto;
		 -webkit-box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.05);
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 22px;
    margin-bottom: 20px;
	background: #fff;
	border: 1px solid salmon;
	}
	.form-group {
		margin-bottom: 20px;
	}
	 .form-control {
		width: 100%;
		height: 40px;
		padding: 10px;
		box-sizing: border-box;
	}
	
	.form-group textarea {
		width: 100%;
		height: 100px;
	}
		.form-group label {
		margin-bottom: 10px;
		display: block;
	}
	.msg-success {
		background: #acff8496;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid #a8e891;
	}
</style>
 