import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe('HeroesComponent', () => {
  it('HeroesComponent.getHeroes should set this.heroes array', () => {
    const returnedHeroes = [
      {
        name: 'Astérix',
        id: 999
      }
    ];

    const stubby = {
      getHeroes: () => {
        return of(returnedHeroes);
      }
    };

    const heroComponent = new HeroesComponent(stubby as never);

    heroComponent.getHeroes();

    expect(heroComponent.heroes).toEqual(returnedHeroes)
  });
});
