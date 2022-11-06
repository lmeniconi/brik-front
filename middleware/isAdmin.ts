import { Context } from '@nuxt/types'

export default function ({ store, redirect }: Context) {
  const user = store.state.auth.user
  if (!user || user.role !== 'admin') return redirect('/')
}
