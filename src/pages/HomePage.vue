<script>
	export default {

	}
</script>

<template>

	<main>

		<div class="container d-flex flex-column justify-content-center align-items-center pt-5">

			<h1 class="mt-5">Welcome</h1>

			<!-- Only 1 h3 to better (?) manage parent's hover effect -->
			<h3 class="text-center">to my developer portfolio, weary traveller. <br> Enjoy your stay</h3>

		</div>

	</main>

</template>

<style scoped>

/* Styling and transitions for title in homepage (on hover).
'Pointer events' mechanism allow effect on parent when hovering 
child ('auto' on child 'none' on parent) */
h1 {
	font-size: 4rem;
	transition: 1s;
	color: #FFFFFF;
	pointer-events: auto;
}

h1:hover {
	font-size: 6rem;
	color: #EE3B2E;
	box-shadow: 10px;
	transition: 1s;
}

h3 {
	transition: 1s;
	color: #FFFFFF;
	opacity: 0;
}

h1:hover + h3 {
	font-size: 3rem;
	color: #EE3B2E;
	opacity: 1;
	box-shadow: 10px;
	transition: 1s;
}

main {
	pointer-events: none;
}

main:hover {
	background-color: rgba(0, 0, 0, 0.5);
	transition: 1s;
}

</style>