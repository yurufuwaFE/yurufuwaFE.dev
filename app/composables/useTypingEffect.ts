export function useTypingEffect(words: string[], options?: { typeSpeed?: number; deleteSpeed?: number; pauseDuration?: number }) {
  const typeSpeed = options?.typeSpeed ?? 100
  const deleteSpeed = options?.deleteSpeed ?? 50
  const pauseDuration = options?.pauseDuration ?? 2000

  const displayText = ref('')
  const wordIndex = ref(0)
  const isDeleting = ref(false)
  let timeout: ReturnType<typeof setTimeout>

  const { isReduced } = usePrefersReducedMotion()

  function tick() {
    if (isReduced.value) {
      displayText.value = words[wordIndex.value]
      return
    }

    const currentWord = words[wordIndex.value]

    if (isDeleting.value) {
      displayText.value = currentWord.substring(0, displayText.value.length - 1)
    } else {
      displayText.value = currentWord.substring(0, displayText.value.length + 1)
    }

    let delay = isDeleting.value ? deleteSpeed : typeSpeed

    if (!isDeleting.value && displayText.value === currentWord) {
      delay = pauseDuration
      isDeleting.value = true
    } else if (isDeleting.value && displayText.value === '') {
      isDeleting.value = false
      wordIndex.value = (wordIndex.value + 1) % words.length
      delay = 300
    }

    timeout = setTimeout(tick, delay)
  }

  onMounted(() => {
    tick()
  })

  onUnmounted(() => {
    clearTimeout(timeout)
  })

  return { displayText }
}
