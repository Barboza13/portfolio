export const observeCards = (): void => {
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

export const mouseTracker = (): void => {
  const shadow = document.createElement('div')
  shadow.style.position = 'fixed'
  shadow.style.width = '50px'
  shadow.style.height = '50px'
  shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  shadow.style.boxShadow = shadow.style.borderRadius = '50%'
  shadow.style.pointerEvents = 'none'
  shadow.style.zIndex = '1000'
  shadow.style.top = '0'
  shadow.style.left = '0'
  shadow.style.transform = 'translate(0, 0)'
  shadow.style.transition = 'transform 0.1s ease'
  shadow.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 1)'
  document.body.appendChild(shadow)

  document.addEventListener('mousemove', (event: MouseEvent) => {
    const { clientX, clientY } = event
    shadow.style.transform = `translate(${clientX}px, ${clientY}px)`
  })
}
