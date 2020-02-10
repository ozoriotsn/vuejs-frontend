<template>

  <div>
    <!--<b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />-->


    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
      </b-col>
    </b-row>


    <!--<div class="mt-4">currentPage: {{currentPage}}</div>-->
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      totalRows: this.patients.length,
      pageOptions: [ 5, 10, 15 ]
    }
  },
  methods: {
    linkGen (pageNum) {
      return '#page/' + pageNum + '/foobar'
    }
  }
}
</script>

<!-- pagination-1.vue -->
