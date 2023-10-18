<script>
	export default {

	}
</script>

<template>

	<main>

		<div class="container d-flex flex-column justify-content-center align-items-center pt-5">

			<h1 class="mt-5">Welcome...</h1>

			<!-- Only 1 h3 to better (?) manage parent's hover effect -->
			<h3 class="text-center pb-5">to my developer portfolio, weary traveller. <br> Enjoy your stay</h3>

			<button type="button" class="btn btn-lg btn-outline-danger mb-5">
				<router-link class="nav-link" :to="{name:'projects.index'}">View Projects</router-link>
			</button>
			

		</div>

	</main>

</template>

<style scoped>

/* Styling and transitions for title in homepage (on hover)*/

h1 {
	font-size: 4rem;
	color: #FFFFFF;
	transition: 1s;
}

main:hover h1 {
	font-size: 6rem;
	color: #EE3B2E;
	box-shadow: 10px;
	transition: 1s;
}

h3 {
	color: #FFFFFF;
	opacity: 0;
	transition: 1s;
}

main:hover h3 {
	font-size: 3rem;
	color: #EE3B2E;
	opacity: 1;
	box-shadow: 10px;
	transition: 1s;
}

button {
	opacity: 0;
}

main:hover button {
	opacity: 1;
}

main {
	background-color: rgba(0, 0, 0, 0);
	transition: 1s;
}

main:hover {
	background-color: rgba(0, 0, 0, 0.5);
	transition: 1s;
}

</style>