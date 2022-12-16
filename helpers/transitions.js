export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '100%', opacity: 0 },
  enter: { 
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
    opacity: 0,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scale = {
	initial: { scale: 1.035 },
  enter: { 
    scale: 1,    
    transition: { duration: 0.85, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 1.035,
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}