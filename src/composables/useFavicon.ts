import { useColorMode } from '@vueuse/core'

export const useFavicon = () => {
  const colorMode = useColorMode()

  const updateFavicon = () => {
    if (!import.meta.client || !document) return

    const existingFavicons = document.querySelectorAll('link[rel*="icon"]')
    existingFavicons.forEach((favicon) => favicon.remove())

    const favicon = document.createElement('link')
    favicon.rel = 'icon'
    favicon.type = 'image/svg+xml'

    if (colorMode.value === 'dark') {
      favicon.href = '/logo.svg'
    } else {
      favicon.href = '/logo_dark.svg'
    }

    document.head.appendChild(favicon)
  }

  return { updateFavicon }
}
