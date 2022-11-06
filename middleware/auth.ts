import { Context } from '@nuxt/types'

export default async function ({ store }: Context) {
  const user = store.state.auth.user
  if (!user)
    await store.dispatch('auth/fetchUser', {
      redirect: true,
    })
}
