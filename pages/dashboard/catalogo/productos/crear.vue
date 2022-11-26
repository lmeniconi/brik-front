<template>
  <section class="space-y-sm">
    <DashboardTitle title="Añadir Producto" withGoBack />

    <DashboardCard title="Información del producto">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Categoria</span>
        </label>
        <select class="select-bordered select">
          <option disabled selected>Seleccionar Categoria</option>
          <option>Producto 1</option>
          <option>Producto 2</option>
          <option>Producto 3</option>
          <option>Producto 4</option>
        </select>
      </div>
      <hr />
      <DashboardInput label="Nombre" placeholder="Nombre del producto" />
      <hr />
      <DashboardInput
        label="Precio"
        placeholder="Precio del producto"
        type="number"
        :min="1"
      />
      <hr />
      <DashboardTextarea
        label="Descripción"
        placeholder="Descripción del producto"
      />
      <hr />
      <DashboardInputList
        label="Características"
        placeholder="Característica del producto"
        button="Nueva características"
      />
    </DashboardCard>

    <DashboardCard title="Almacen">
      <DashboardInput
        label="Existencias"
        placeholder="Existencias totales del producto"
        type="number"
        :min="1"
      />
    </DashboardCard>

    <section class="flex justify-end">
      <button class="btn btn-primary">Guardar</button>
    </section>
  </section>
</template>
