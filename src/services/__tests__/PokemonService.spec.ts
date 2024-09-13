import { describe, it, expect, vi } from 'vitest'
import PokemonService from '../PokemonService'

describe('Pokemon service', () => {
  it('Get pokemon by id', async () => {
    const mockResponse = {
      id: 1,
      name: 'bulbasaur1'
    }

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    ) as jest.Mock

    const service = new PokemonService()

    const pokemon = await service.getPokemonById(1)

    expect(pokemon).toEqual(mockResponse)

    expect(fetch).toHaveBeenLastCalledWith('https://pokeapi.co/api/v2/pokemon/1')
  })
})
