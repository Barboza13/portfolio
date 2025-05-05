/**
 * @description Update favicon based on the user's color scheme preference.
 * @returns {void}
 */
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

  console.log('changed favicon!')
}

export default updateFavicon
