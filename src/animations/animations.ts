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
  const trailCount = 20
  const trails: HTMLDivElement[] = []

  for (let i = 0; i < trailCount; i++) {
    const shadow = document.createElement('div')
    shadow.classList.add(
      'fixed',
      'w-[15px]',
      'h-[15px]',
      'z-[-1]',
      'top-0',
      'left-0'
    )

    shadow.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
    shadow.style.pointerEvents = 'none'
    shadow.style.position = 'absolute'
    shadow.style.transition = 'transform 0.1s linear'
    shadow.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 1)'

    document.body.appendChild(shadow)
    trails.push(shadow)
  }

  let mouseX = 0,
    mouseY = 0
  const positions: { x: number; y: number }[] = Array(trailCount).fill({
    x: 0,
    y: 0,
  })

  document.addEventListener('mousemove', (event: MouseEvent) => {
    mouseX = event.pageX
    mouseY = event.pageY
  })

  function animate() {
    positions.pop()
    positions.unshift({ x: mouseX, y: mouseY })

    trails.forEach((trail, index) => {
      const { x, y } = positions[index]
      trail.style.transform = `translate(${x}px, ${y}px)`
      trail.style.opacity = `${1 - index / trailCount}`
    })

    requestAnimationFrame(animate)
  }

  animate()
}
