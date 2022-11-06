<template>
  <section>
    <button
      v-if="withGoBack"
      class="btn btn-outline btn-primary mb-5"
      @click="goBack"
    >
      <ArrowLeftIcon /> Volver
    </button>
    <h1 class="title">{{ title }}</h1>
    <p class="title-description">{{ description }}</p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    withGoBack: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
  },
})
</script>
