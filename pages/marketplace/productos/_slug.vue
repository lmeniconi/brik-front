<template>
  <section class="space-y-xs">
    <section class="flex gap-5">
      <div class="h-[32rem] w-4/12">
        <div class="h-full rounded border-2 border-gray-100" />
      </div>
      <div class="flex w-8/12 flex-col justify-between py-5">
        <div>
          <p class="text-xl font-medium text-primary-500">Fruit</p>
          <div class="flex items-center space-x-1">
            <h1 class="text-3xl font-semibold">Fresh figs</h1>
            <span class="text-xs">-</span>
            <NuxtLink
              to="/marketplace/proveedores/1"
              class="text-xs transition duration-300 hover:underline"
            >
              Proveedor 1
            </NuxtLink>
          </div>
        </div>
        <MarketplaceRating />

        <div>
          <p class="font-medium">Price for 1 kg</p>
          <h2 class="text-3xl font-semibold">$24.00</h2>
        </div>

        <div class="w-7/12 space-y-2 text-sm text-gray-500">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
            modi repudiandae consectetur quas aut distinctio accusamus nihil
            reprehenderit vero doloremque?
          </p>
          <ul class="ml-auto pl-6">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              illum!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              illum!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              illum!
            </li>
          </ul>
        </div>

        <div>
          <a class="btn-success btn flex w-fit space-x-1 text-xs text-white">
            <BrandWhatsappIcon />
            <span> Contactar con proveedor </span>
          </a>
        </div>

        <div class="flex space-x-2">
          <input
            type="number"
            placeholder="Cantidad"
            min="1"
            class="input-bordered input w-32 focus:outline-none"
          />
          <button class="btn-primary btn text-xs">Comprar ahora</button>
          <button class="btn-outline btn-primary btn space-x-1 text-xs">
            <ShoppingCartPlusIcon />
            <span> Agregar al carrito </span>
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'marketplace',
})
</script>

<style lang="postcss" scoped>
ul li::before {
  @apply -ml-4 inline-block w-4 font-bold text-primary-500;
  content: '\2022';
}
</style>
