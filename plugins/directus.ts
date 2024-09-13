import { createDirectus, authentication, rest, refresh  } from '@directus/sdk';
import { useAuth } from '~~/store/auth'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig()
  const directusUrl = config.public.directusUrl

  // Create a new instance of the Directus SDK with custom storage and auth
  const directus = createDirectus(directusUrl).with(authentication('cookie')).with(rest());

  // Using the useAuth composable to access the auth store
  const auth = useAuth()

  const token = await directus.getToken() // Get the current auth token
  const side = process.server ? 'server' : 'client'

  // If there's a token but no user in the auth store, fetch the user
  if (!auth.isLoggedIn && token) {
    console.log('Token found, fetching user from ' + side)
    console.log('Token is', token)
    try {
      await auth.getUser() // Fetch user from Directus
      console.log('User fetched successfully from ' + side)
    } catch (e) {
      console.error('Failed to fetch user from ' + side, e.message)
    }
  }

  // If the user is logged in but no token is found, reset the auth store
  if (auth.isLoggedIn && !token) {
    console.log('Token not found, resetting auth store from ' + side)
    auth.$reset()
  }

  return {
    provide: { directus }
  }
})