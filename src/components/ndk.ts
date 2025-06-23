import { DEFAULT_RELAYS } from '@/lib/constants/defaultRelays'
import NDK from '@nostr-dev-kit/ndk'
import {
  NDKSessionLocalStorage,
  useNDKInit,
  useNDKSessionMonitor
} from '@nostr-dev-kit/ndk-hooks'
import { useEffect } from 'react'

const ndk = new NDK({ explicitRelayUrls: DEFAULT_RELAYS })

if (typeof window !== 'undefined') ndk.connect()

const sessionStorage = new NDKSessionLocalStorage()

/**
 * Use an NDKHeadless component to initialize NDK in order to prevent application-rerenders
 * when there are changes to the NDK or session state.
 *
 * Include this headless component in your app layout to initialize NDK correctly.
 * @returns
 */
export default function NDKHeadless() {
  const initNDK = useNDKInit()

  useNDKSessionMonitor(sessionStorage, {
    profile: true, // automatically fetch profile information for the active user
    follows: true // automatically fetch follows of the active user
  })

  useEffect(() => {
    if (ndk) initNDK(ndk)
  }, [initNDK])

  return null
}
