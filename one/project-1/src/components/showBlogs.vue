<template>
	<div v-theme:bgcolor="'medium'" id="show-blogs" class="container">
		<h1>All blogs</h1>
		<div class="single-blog card-view" v-for="blog in blogs" :key="blog.id">
			<h4 v-rainbow>{{blog.title}}</h4>
			<p>{{blog.body}}</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			blogs: [],
		}
	},
	methods: {
		
	},
	created() {
		this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data) {
			this.blogs = data.body.slice(0, 20);  
		})
	},
}
</script>