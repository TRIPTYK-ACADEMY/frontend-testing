import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MessagesComponent } from "./messages.component";
import { MessageService } from "../message.service";

describe('MessagesComponent integration test', () => {
  let component: ComponentFixture<MessagesComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesComponent],
      providers: [MessageService]
    }).compileComponents();

    component = TestBed.createComponent(MessagesComponent);
    element = component.nativeElement as HTMLElement;
  });

  it('Should display nothing when MessageService is empty', async () => {
    expect(element.innerText).toEqual('');
  });

  it('Should display a list of messages if the MessageService is not empty', () => {
    const messageService = TestBed.inject(MessageService);

    messageService.messages = ['test'];

    // si il y'a des changements, angular reévalue l'HTML
    component.detectChanges();

    expect(element.querySelector('h2')?.innerText).toEqual('Messages');

    expect(
      // on doit préciser que le querySelector renvoie une Div
      (element.querySelector('[data-test-id="message-list"]') as HTMLDivElement).innerText
    ).toEqual('test');
  });

  it('Should clear the messages when clicking on the clear button', () => {
    const messageService = TestBed.inject(MessageService);

    messageService.messages = ['message1', 'message2'];

    component.detectChanges();

    const button = document.querySelector('button');

    button?.click();

    component.detectChanges();

    expect(messageService.messages).toEqual([]);
    expect(element.innerText).toEqual('');
  });
});
