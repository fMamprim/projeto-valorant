// criar uma interface pra colocar na const Agent e poder usar as propriedades de cada agent que está no json
// IAgent = I de interface
export interface IAgent {
  role: {
    displayName: string
  }
  displayName: string
  abilities: {
    displayIcon: string
    displayName: string
  }[]
  fullPortrait: string
  // esses 2 colchetes transformam isso em um array
}
