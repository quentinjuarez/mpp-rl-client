import { NavigationGuardWithThis, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

function evaluateGuards(
  guards: NavigationGuardWithThis<any>[],
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const guardsLeft = guards.slice(0) // clone the array so we do not accidentally modify it
  const nextGuard = guardsLeft.shift()

  if (!nextGuard) {
    next()
    return
  }

  const applyNext = (nextArg: any) => {
    if (!nextArg) {
      evaluateGuards(guardsLeft, to, from, next)
      return
    }

    next(nextArg)
  }

  nextGuard(to, from, applyNext as NavigationGuardNext)
}

const applyMiddlewares = () => {
  return (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const guards = to.meta.middlewares || []

    return evaluateGuards(guards, to, from, next)
  }
}

export default applyMiddlewares
