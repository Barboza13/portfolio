const updateFavicon = (): void => {
  const favicon = document.querySelector('link[rel="icon"]')

  if (!favicon) return

  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  favicon.setAttribute(
    'href',
    isDarkMode
      ? 'src/icons/portfolio-dark-icon.svg'
      : 'src/icons/portfolio-light-icon.svg'
  )
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', updateFavicon)

export default updateFavicon
