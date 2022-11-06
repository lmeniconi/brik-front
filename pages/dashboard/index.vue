<template>
  <section class="space-y-10">
    <section class="grid grid-cols-3 gap-4">
      <DashboardCard v-for="i in 3" :key="i" title="Clientes">
        <template #action>
          <button>
            <Menu2Icon />
          </button>
        </template>

        <div class="flex items-center justify-between">
          <div class="space-y-2">
            <p class="text-4xl font-semibold">
              <ClientOnly>
                <ICountUp :endVal="2420" />
              </ClientOnly>
            </p>
            <div class="flex items-center space-x-1 text-sm">
              <div class="flex items-center text-green-500">
                <ArrowUpIcon size="16" />
                <ClientOnly>
                  <span> <ICountUp :endVal="40" />% </span>
                </ClientOnly>
              </div>
              <span>vs ultimo mes</span>
            </div>
          </div>

          <img src="/assets/svg/graph.svg" alt="Graph" />
        </div>
      </DashboardCard>
    </section>

    <section>
      <DashboardTable
        :headers="['Cliente', 'Header 2', 'Header 3']"
        selectable
        withActions
      >
        <tr v-for="i in 10" :key="i">
          <td>
            <label>
              <input type="checkbox" class="checkbox" />
            </label>
          </td>
          <td>
            <div class="flex items-center space-x-3">
              <Avatar
                src="https://avatars.dicebear.com/api/adventurer-neutral/luciano.svg"
              />
              <div>
                <div class="font-bold">Hart Hagerty</div>
                <div class="text-sm opacity-50">United States</div>
              </div>
            </div>
          </td>
          <td>
            Zemlak, Daniel and Leannon
            <br />
            <span class="badge badge-ghost badge-sm"
              >Desktop Support Technician</span
            >
          </td>
          <td>Purple</td>
          <td>
            <button class="btn btn-ghost btn-xs">details</button>
          </td>
        </tr>
      </DashboardTable>
    </section>
  </section>
</template>
