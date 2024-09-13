export interface PokemonData {
  id: number
  name: string
  abilities: []
  forms: []
}

export default class PokemonService {
  async getPokemonById(id: number): Promise<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    try {
      if (id < 1) {
        throw new Error(`Id not valid`)
      }
      const r = await fetch(url)

      if (!r.ok) {
        throw new Error(`Response status: ${r.status}`)
      }

      return await r.json()
    } catch (error) {
      console.error(error.message)

      return null
    }
  }
  async getSpriceById(id: number): Promise<any> {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${id}`

    try {
      if (id < 1) {
        throw new Error(`Id not valid`)
      }
      const r = await fetch(url)

      if (!r.ok) {
        throw new Error(`Response status: ${r.status}`)
      }
      

      return await r.json()
    } catch (error) {
      console.error(error.message)

      return null
    }
  }
}
