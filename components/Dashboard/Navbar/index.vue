<template>
  <nav class="fixed top-0 left-0 z-30 flex h-[10vh] w-full bg-white">
    <div class="app-shell-left border-b-2">
      <div class="flex h-full items-center justify-center">
        <NuxtLink to="/dashboard" class="text-3xl font-bold text-black">
          Brik
        </NuxtLink>
      </div>
    </div>
    <div
      class="app-shell-right flex items-center justify-between border-b-2 px-5"
    >
      <div>
        <p class="text-lg font-bold">Bienvenido {{ user?.firstName }},</p>
        <p class="text-sm">Esperamos que tengas una mañana excelente</p>
      </div>

      <DashboardNavbarSearch />

      <div class="flex items-center space-x-4">
        <div class="dropdown-end dropdown">
          <label tabindex="0" class="cursor-pointer">
            <div class="indicator">
              <span
                class="badge-error badge badge-xs indicator-end indicator-item"
              />
              <BellIcon />
            </div>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
          >
            <li><a>Notificacion 1</a></li>
            <li><a>Notificacion 2</a></li>
          </ul>
        </div>

        <div class="dropdown-end dropdown">
          <label tabindex="0" class="cursor-pointer">
            <div class="indicator">
              <Avatar
                :src="
                  user?.picture ||
                  `https://avatars.dicebear.com/api/initials/${user?.firstName}-${user?.lastName}.svg`
                "
                :alt="user?.email"
              />
            </div>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <NuxtLink to="/auth/logout">
                <LogoutIcon /> Cerrar sesión</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
})
</script>
