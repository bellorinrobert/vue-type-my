/**
 * @author Robert Bellorin <bellorinrobert@gmail.com>
 * @date 2024-09-12
 *
 * Testing for store counter
 */

import { beforeEach, describe, it, expect } from 'vitest'
import { useCounterStore } from '../counter'
import { createPinia, setActivePinia } from 'pinia'

describe('Store counter', () => {
  beforeEach(() => {
    /**
     * Antes de correr la prueba
     * se crea un store limpio para
     * hacer cada una de las acciones
     */

    setActivePinia(createPinia())
  })

  /**
   * Validdar increment
   */
  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    counter.increment()
    expect(counter.count).toBe(1)
  })

  /**
   * Validar reset
   */

  it('reset', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
    store.increment()
    store.increment()
    store.increment()
    expect(store.count).toBe(3)
    store.reset()
    expect(store.count).toBe(0)
  })

  /**
   * Validar decrement
   */
  it('decrement', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
    store.increment()
    store.increment()
    expect(store.count).toBe(2)
    store.reset()
    expect(store.count).toBe(0)
  })
})
