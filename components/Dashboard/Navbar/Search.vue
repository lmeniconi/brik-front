<template>
  <div class="relative mx-auto w-full max-w-md rounded-md px-5 py-4">
    <div class="relative">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3">
        <SearchIcon size="16" class="text-gray-700" />
      </span>

      <label class="input-group input-group-xs">
        <input
          ref="searchInput"
          v-model="search"
          type="text"
          class="w-full rounded-lg border py-2 pl-10 pr-4 text-sm text-gray-500 focus:outline-none"
          placeholder="Buscar..."
        />
        <span class="flex flex-nowrap items-center space-x-1 bg-gray-100">
          <div>{{ metaKey }}</div>
          <div>+</div>
          <div>K</div>
        </span>
      </label>
    </div>

    <ul
      v-show="matches.length"
      class="menu rounded-box absolute inset-x-0 mx-6 mt-2 max-h-72 overflow-y-auto border bg-white p-2"
    >
      <li v-for="link in matches.slice(0, 4)" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="flex items-center"
          @click.native="clearSearch"
        >
          <component :is="link.icon" v-if="link.icon" />
          <span>{{ link.label }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import menu from '@/resources/menu'

export default Vue.extend({
  data() {
    let links: any = []
    menu.forEach((section) => (links = [...links, ...section]))
    links.forEach((link: any) => {
      if (link.links) links = [...links, ...link.links]
    })

    return {
      search: '',
      matches: [],

      menu: links,
    }
  },
  computed: {
    metaKey() {
      if (typeof window === 'undefined') return ''

      const isMac = navigator.platform.toUpperCase().includes('MAC')
      return isMac ? '⌘' : 'Ctrl'
    },
  },
  watch: {
    search() {
      if (!this.search.length) {
        this.matches = []
        return
      }

      this.matches = this.menu.filter((link: any) => {
        const query = this.search.toLowerCase()

        return (
          link.label.toLowerCase().includes(query) ||
          link.to.toLowerCase().includes(query)
        )
      })
    },
  },
  mounted() {
    document.addEventListener('keydown', this.keyPress)
  },
  destroyed() {
    document.removeEventListener('keydown', this.keyPress)
  },

  methods: {
    clearSearch() {
      this.search = ''
    },

    keyPress(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        const input = this.$refs.searchInput as HTMLInputElement
        input.focus()
      }
    },
  },
})
</script>
