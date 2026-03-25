export function usePrefersReducedMotion() {
  const isReduced = ref(false)

  onMounted(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    isReduced.value = mql.matches

    const handler = (e: MediaQueryListEvent) => {
      isReduced.value = e.matches
    }
    mql.addEventListener('change', handler)

    onUnmounted(() => {
      mql.removeEventListener('change', handler)
    })
  })

  return { isReduced }
}
