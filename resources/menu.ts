export default [
  [
    {
      icon: 'HomeIcon',
      label: 'Inicio',
      to: '/dashboard',
    },
    {
      icon: 'PackageIcon',
      label: 'Pedidos',
      to: '/dashboard/pedidos',
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
        {
          label: 'Categorías',
          to: '/dashboard/catalogo/categorias',
        },
        {
          label: 'Colecciones',
          to: '/dashboard/catalogo/colecciones',
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
      icon: 'FileAnalyticsIcon',
      label: 'Estadisticas',
      to: '/dashboard/estadisticas',
    },
    {
      icon: 'TrendingUpIcon',
      label: 'Marketing',
      to: '/dashboard/marketing',
    },
    {
      icon: 'BuildingStoreIcon',
      label: 'Mi Tienda',
      to: '/dashboard/mi-tienda',
    },
  ],
]
