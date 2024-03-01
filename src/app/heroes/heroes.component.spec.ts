import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";

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

  it('Should call heroService.getHeroes() on init', () => {
    const service = new HeroService({} as never, {} as never);
    const heroComponent = new HeroesComponent(
      service
    );

    spyOn(service, 'getHeroes').and.returnValue(of([]));

    heroComponent.ngOnInit();

    expect(service.getHeroes).toHaveBeenCalled();
  });
});
