import type { ShippingFormData } from '@/components/ZapoutPage/ShippingForm'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ZapoutState {
  shippingInfo?: ShippingFormData
  setShippingInfo: (data: ShippingFormData) => void
}

export const useZapoutStore = create<ZapoutState>()(
  persist(
    (set, get) => ({
      shippingInfo: undefined,
      setShippingInfo: (data: ShippingFormData) => {
        set((state) => {
          return {
            ...state,
            shippingInfo: data
          }
        })
      }
    }),
    {
      name: 'conduit-customer-shipping-info',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        shippingInfo: state.shippingInfo
      })
    }
  )
)
