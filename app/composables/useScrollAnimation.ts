export function useScrollAnimation(target: Ref<HTMLElement | null>) {
  const { isReduced } = usePrefersReducedMotion()

  onMounted(() => {
    if (isReduced.value || !target.value) return

    const el = target.value
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
  })
}
