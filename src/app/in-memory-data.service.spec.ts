import { InMemoryDataService } from "./in-memory-data.service";

describe('InMemoryDataService', () => {
  it('Throws an error when genId() is called with an empty array', () => {
    const inMemory = new InMemoryDataService();

    expect(() => inMemory.genId([])).toThrowError('Cannot use an empty array');
  });
});
