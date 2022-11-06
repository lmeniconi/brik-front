<template>
  <div>
    <component
      :is="component"
      :to="to"
      :class="classes"
      @click="toggleDropdown"
    >
      <component :is="icon" v-if="icon" :size="iconSize" />
      <span>{{ label }}</span>
      <ChevronRightIcon
        v-if="isDropdown"
        size="16"
        class="transition duration-200"
        :class="{ 'rotate-90': dropdown }"
      />
    </component>

    <!-- Dropdown -->
    <div v-if="isDropdown">
      <transition name="dropdown">
        <ol v-show="dropdown" class="mt-0.5 space-y-0.5 pl-5">
          <li v-for="link in links" :key="link.label">
            <DashboardSidebarButton :data="link" size="sm" />
          </li>
        </ol>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type ButtonData = {
  label: string
  to: string
  icon: string | undefined
  links: ButtonData[] | undefined
}

enum ButtonSize {
  sm = 'sm',
  base = 'base',
}

export default Vue.extend({
  props: {
    data: {
      type: Object as () => ButtonData,
      required: true,
    },
    size: {
      type: String,
      validator: (val: ButtonSize) => Object.values(ButtonSize).includes(val),
      default: ButtonSize.base,
    },
  },

  data() {
    return {
      label: this.data.label,
      to: this.data.to,
      icon: this.data.icon,
      links: this.data.links,

      dropdown: false,
    }
  },
  computed: {
    component(): string {
      return this.isDropdown ? 'button' : 'NuxtLink'
    },
    isDropdown(): boolean {
      return this.data.links !== undefined
    },
    isActive(): boolean {
      const { path } = this.$route

      if (this.to === '/dashboard') return path === this.to
      return path.includes(this.to)
    },
    classes(): string {
      let classes =
        'flex w-full items-center space-x-2 rounded-lg py-3 pl-4 transition duration-200'

      if (this.size === ButtonSize.sm) classes += ' text-sm'

      if (this.isActive)
        classes +=
          ' border-l-4 border-primary-500 bg-primary-100 text-primary-500'
      else classes += ' hover:bg-gray-100 hover:text-gray-500'

      return classes
    },
    iconSize(): string {
      if (this.size === ButtonSize.sm) return '20'
      return '24'
    },
  },
  watch: {
    $route: {
      handler() {
        if (this.isActive) this.dropdown = true
      },
      immediate: true,
    },
  },
  methods: {
    toggleDropdown(): void {
      this.dropdown = !this.dropdown
    },
  },
})
</script>

<style lang="postcss" scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
