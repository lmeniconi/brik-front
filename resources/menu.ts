export default [
  [
    {
      icon: 'HomeIcon',
      label: 'Inicio',
      to: '/dashboard',
    },
    {
      icon: 'HangerIcon',
      label: 'Catálogo',
      to: '/dashboard/catalogo',
      links: [
        {
          label: 'Productos',
          to: '/dashboard/catalogo/productos',
        },
      ],
    },
    {
      icon: 'UserIcon',
      label: 'Clientes',
      to: '/dashboard/clientes',
    },
  ],
  [
    {
      icon: 'BuildingStoreIcon',
      label: 'Mi Tienda',
      to: '/dashboard/mi-tienda',
    },
  ],
]
