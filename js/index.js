// Initialisation des données
const datas = [
  {
    title: 'Coucou',
    color: 'blue'
  },
  {
    title: 'Hello',
    color: 'green'
  },
  {
    title: 'Salut',
    color: 'yellow'
  },
  {
    title: 'Goodbye',
    color: 'red'
  }
]

// Initialisation de la Factory
const WordsFactory = (datas, rootElt) => {
    
  const buildCardDOM = data => {
    const newElt = document.createElement('h2')
    newElt.style.color = data.color
    newElt.innerText = data.title
    rootElt.appendChild(newElt)
  }

  const build = () => {
    datas.forEach(data => {
      buildCardDOM(data)
    })
  }

  return { build }
}

// Initialisation de la séquence
window.addEventListener('DOMContentLoaded', () => {
  const init = () => {
    
    const rootElt = document.getElementById('root')

    const words = WordsFactory(datas, rootElt)
    words.build()
  }

  init()
})
