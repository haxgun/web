import { gsap } from 'gsap'
import { onUnmounted } from 'vue'

interface ProfileElements {
  photo?: HTMLElement
  name?: HTMLElement
  role?: HTMLElement
  contacts?: HTMLElement
  descriptions: HTMLElement[]
  github?: HTMLElement
  projects?: HTMLElement
  footer?: HTMLElement
}

export function useProfileAnimation() {
  let masterTimeline: gsap.core.Timeline

  const animateProfile = (elements: ProfileElements) => {
    const { photo, name, role, contacts, descriptions, github, projects, footer } = elements

    const allElements = [
      photo,
      name,
      role,
      contacts,
      ...descriptions,
      github,
      projects,
      footer,
    ].filter(Boolean) as HTMLElement[]

    if (allElements.length === 0) {
      return
    }

    gsap.set(allElements, {
      filter: 'blur(12px)',
      opacity: 0,
      y: 30,
      scale: 1.03,
    })

    masterTimeline = gsap.timeline()

    if (photo) {
      masterTimeline.to(photo, {
        filter: 'blur(0px)',
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power2.out',
      })
    }

    if (name && role) {
      masterTimeline.to(
        [name, role],
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
        },
        '-=0.8',
      )
    }

    if (contacts) {
      masterTimeline.to(
        contacts,
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        },
        '-=0.5',
      )
    }

    if (descriptions.length > 0) {
      masterTimeline.to(
        descriptions,
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: {
            amount: 1.2,
            from: 'start',
          },
        },
        '-=0.3',
      )
    }

    if (github) {
      masterTimeline.to(
        github,
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
        },
        '-=0.2',
      )
    }

    if (projects) {
      masterTimeline.to(
        projects,
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
        },
        '-=0.8',
      )
    }

    if (footer) {
      masterTimeline.to(
        footer,
        {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
        },
        '-=0.2',
      )
    }
  }

  onUnmounted(() => {
    masterTimeline?.kill()
  })

  return { animateProfile }
}
