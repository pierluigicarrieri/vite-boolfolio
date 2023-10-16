<script>

import axios from 'axios';

	export default {

    data() {

      return {

        fetched_data : [],
        pagination_info : {},
      }

    },

    methods : {

      fetchData() {

        axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
          this.fetched_data = response.data.results.data;
          delete response.data.results.data;
          this.pagination_info = response.data.results;
        });

      },

    },

    mounted() {
      this.fetchData()
    }

	}
</script>

<template>
    <h1>Ciao belli</h1>
</template>

<style>

</style>
