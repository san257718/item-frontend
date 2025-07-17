// store/layoutStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface LayoutState {
  isAuthenticated: boolean;
  setAuthenticated: (auth: boolean) => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setAuthenticated: (auth) => set({ isAuthenticated: auth }),
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
