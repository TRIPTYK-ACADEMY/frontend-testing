import { HeroSearchComponent } from "./hero-search.component";

describe('HeroSearchComponent', () => {
  it('Calling HeroSearchComponent.search adds to searchTerms', () => {
    const heroSearchComponent = new HeroSearchComponent(
      {} as never
    );

    const searchTerms = heroSearchComponent['searchTerms'];
    let isSearchTermCalled = false;

    searchTerms.subscribe((value) => {
      expect(value).toEqual('coucou');
      isSearchTermCalled = true;
    });

    heroSearchComponent.search('coucou');

    expect(isSearchTermCalled).toBe(true);
  });
});
