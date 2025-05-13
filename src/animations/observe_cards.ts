/**
 * @description Controls observe cards animation.
 */
const observeCards = (): void => {
  const cards: NodeListOf<Element> = document.querySelectorAll('.card')

  const observer: IntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-20')
        observer.unobserve(entry.target)
      }
    })
  })

  cards.forEach((card) => observer.observe(card))
}

export default observeCards
