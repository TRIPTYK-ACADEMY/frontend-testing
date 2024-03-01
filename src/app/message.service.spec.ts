import { TestBed } from "@angular/core/testing";
import { HeroService } from "./hero.service";
import { MessageService } from "./message.service";

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('adds a message when MessageService.add is called', () => {
    service.add('Coucou');
    expect(service.messages).toEqual(['Coucou']);
  });

  it('clear() empties the array', () => {
    service.add('message');
    service.clear();
    expect(service.messages).toEqual([]);
  });

  afterEach(() => {
    // cleanup
  });
});

describe('MessageService with TestBed', () => {
  it('adds a message when MessageService.add is called', ()  => {
    TestBed.configureTestingModule({});

    const service = TestBed.inject(MessageService);

    service.add('coucou');

    expect(service.messages).toEqual(['coucou']);
  });
});
