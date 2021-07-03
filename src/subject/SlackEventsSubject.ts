import { BaseSubject } from "@/subject/BaseSubject";
import { App } from "@slack/bolt";
import { MessageContext } from "@/observer/BaseSlackHubObserver";

export class SlackEventsSubject extends BaseSubject<MessageContext> {
  app: App;

  constructor(app: App) {
    super();
    this.app = app;
  }

  init() {
    this.app.message(
      async ({ next }) => {
        next && (await next());
      },
      async (context) => {
        this.notifyObservers(context)
      }
    );
  }
}
