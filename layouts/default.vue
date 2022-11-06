<template>
  <section>
    <DashboardNavbar />
    <section class="relative pt-[10vh]">
      <DashboardSidebar class="app-shell-left" />
      <main class="app-shell-right ml-auto p-10">
        <transition name="fade">
          <Nuxt />
        </transition>
      </main>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: 'auth',
})
</script>

<style lang="postcss">
/* Layout */
.app-shell-left {
  @apply w-2/12 border-r-2 border-gray-100;
}

.app-shell-right {
  @apply w-10/12  border-gray-100;
}

/* Components */
.title {
  @apply text-2xl font-bold;
}

.title-description {
  @apply text-gray-500;
}

.subtitle {
  @apply text-lg font-medium;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
