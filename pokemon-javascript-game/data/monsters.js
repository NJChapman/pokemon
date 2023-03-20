const monsters = {
  Emby: {
    position: {
      x: 280,
      y: 325
    },
    image: {
      src: './img/embySprite.png'
    },
    frames: {
      max: 2,
      hold: 30
    },
    sprite4x4: false,
    animate: true,
    name: 'Emby',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Blooper: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/blooperSprite.png'
    },
    frames: {
      max: 2,
      hold: 30
    },
    sprite4x4: true,
    animate: true,
    name: 'Blooper',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  Draggle: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/draggleSprite.png'
    },
    frames: {
      max: 2,
      hold: 30
    },
    sprite4x4: false,
    animate: true,
    isEnemy: true,
    name: 'Draggle',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}
