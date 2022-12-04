<template>
  <DashboardModalBase
    v-model="active"
    :title="`Borrar ${model}`"
    :description="`¿Estás seguro que deseas borrar este ${model}?`"
  >
    <template #actions>
      <button class="btn btn-primary text-white" @click="close">
        Cancelar
      </button>
      <button class="btn btn-error text-white" @click="remove">Borrar</button>
    </template>
  </DashboardModalBase>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    endpoint: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: this.value,
    }
  },
  watch: {
    value() {
      this.active = this.value
    },
    active() {
      this.$emit('input', this.active)
    },
  },
  methods: {
    async remove() {
      this.$store.commit('loader/setLoading', true)
      await this.$axios.delete(this.endpoint)
      this.$store.commit('loader/setLoading', false)
      this.active = false
      this.$emit('refresh')
    },

    close() {
      this.active = false
    },
  },
})
</script>
