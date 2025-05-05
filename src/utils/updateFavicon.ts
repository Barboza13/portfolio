/**
 * @description Update favicon based on the dark mode.
 * @returns {void}
 */
export default function updateFavicon(): void {
  const favicon = document.querySelector('link[rel="icon"]')
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (!favicon) return

  favicon.setAttribute(
    'href',
    isDarkMode
      ? '/icons/portfolio-dark-icon.svg'
      : '/icons/portfolio-light-icon.svg'
  )
}
