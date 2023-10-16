<script>

import axios from 'axios';
import ProjectCard from "./components/ProjectCard.vue"

	export default {

    components : {
      ProjectCard
    },

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

    <h1 class="py-3 text-center text-danger">Questa è l'app</h1>

    <div class="main">

      <div class="container">

        <div class="row row-cols-2 g-4">

          <div class="col" v-for="project in fetched_data" :key="project.id">

            <ProjectCard :project="project"></ProjectCard>

          </div>

        </div>

      </div>

    </div>

</template>

<style>

</style>
