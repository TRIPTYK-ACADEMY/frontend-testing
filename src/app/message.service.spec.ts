import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

describe('MessageService', () => {
  it('adds a message when MessageService.add is called', () => {
    const service = new MessageService();

    service.add('Coucou');

    expect(service.messages).toEqual(['Coucou']);
  });
});
