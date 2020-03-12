<template>
	<div>
		<h1>Please Fill Out Our Form... </h1>
		<form>
			<div id="form-header">
				<slot name="form-header"></slot>
			</div>
			<div id="form-fields">
				<slot name="form-fields"></slot>
			</div>
			<div id="form-controls">
				<slot name="form-controls"></slot>
			</div>
			<hr> 
			<div id="useful-links">
				<ul>
					<li><a href="">Links 1</a></li>
					<li><a href="">Links 2</a></li>
					<li><a href="">Links 3</a></li>
					<li><a href="">Links 4</a></li>
				</ul>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	
}
</script>