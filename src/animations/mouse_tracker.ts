/**
 * @description Controls the mouse tracker animation.
 */
const mouseTracker = (): void => {
  const trailCount = 50
  const trails: HTMLDivElement[] = []

  for (let i = 0; i < trailCount; i++) {
    const shadow = document.createElement('div')
    shadow.classList.add('w-[10px]', 'h-[10px]', 'z-[-1]', 'top-0', 'left-0')

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

export default mouseTracker
