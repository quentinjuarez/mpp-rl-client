export {}

declare module 'vue-router' {
  interface RouteRecordRaw {
    meta?: RouteMeta
    name: string | null | undefined
  }
  interface RouteLocationNormalized {
    name: string | null | undefined
  }

  interface RouteLocationNormalizedLoaded {
    name: string | null | undefined
  }
}
