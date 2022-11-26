<template>
  <section class="space-y-sm">
    <DashboardTitle title="Añadir Pedido" withGoBack />

    <DashboardCard title="Productos">
      <div class="flex items-center justify-between space-x-4">
        <div class="w-10/12">
          <select class="select-bordered select w-full">
            <option disabled selected class="font-normal">
              Seleccionar Producto
            </option>
            <option>Producto 1</option>
            <option>Producto 2</option>
            <option>Producto 3</option>
            <option>Producto 4</option>
          </select>
        </div>
        <div class="w-2/12">
          <button class="btn btn-primary w-full">Explorar</button>
        </div>
      </div>
      <hr />
    </DashboardCard>

    <DashboardCard title="Cliente">
      <template #action>
        <button class="link-primary link text-sm">Agregar cliente</button>
      </template>

      <select class="select-bordered select w-full">
        <option disabled selected>Seleccionar Cliente</option>
        <option>Cliente 1</option>
        <option>Cliente 2</option>
        <option>Cliente 3</option>
        <option>Cliente 4</option>
      </select>
    </DashboardCard>

    <DashboardCard title="Pago">
      <ol class="space-y-xs">
        <li class="flex items-center justify-between">
          <span>Subtotal</span>
          <span>0 CLP</span>
        </li>
        <li class="flex items-center justify-between">
          <span>Descuento</span>
          <span>-</span>
          <span>0 CLP</span>
        </li>
        <li class="flex items-center justify-between">
          <span>Envio</span>
          <span>0 CLP</span>
        </li>
        <li class="flex items-center justify-between">
          <span>Impuesto</span>
          <span>0 CLP</span>
        </li>
        <hr />
        <li class="flex items-center justify-between font-bold">
          <span>Total</span>
          <span>0 CLP</span>
        </li>
      </ol>
    </DashboardCard>

    <section class="flex justify-end">
      <button class="btn btn-primary">Guardar</button>
    </section>
  </section>
</template>
