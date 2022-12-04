import { Context } from '@nuxt/types'
import { User } from '@/types'

export default function ({ store, redirect }: Context) {
  const user: User | null = store.state.auth.user
  if (!user || user.role !== 'provider') redirect('/')
}
