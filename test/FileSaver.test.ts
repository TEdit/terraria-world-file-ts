import { describe, expect, test } from 'vitest'
import { fileLoader } from '../src/platform/node'
import { FileReader, WorldSections, FileSaver, Liquid, Slope, GameMode } from '../src'

const testFilePath = import.meta.dirname + '/test.wld'

const fileSaverTest = test.extend<{ input: ArrayBuffer; world: WorldSections }>({
  input: async ({}, use) => {
    const inputBuffer = await fileLoader(testFilePath)
    await use(inputBuffer)
  },
  world: async ({ input }, use) => {
    const reader = await new FileReader().loadBuffer(input)
    await use(reader.parse())
  },
})

describe.concurrent('File saver', () => {
  fileSaverTest('Save', async ({ input, world }) => {
    const output = new FileSaver().save(world)

    expect(output.byteLength).toBe(input.byteLength)
    expect(Buffer.compare(Buffer.from(output), Buffer.from(input))).toBe(0)
  })
})
