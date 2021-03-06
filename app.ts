import { PORT, SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET } from "@/config";
import { ExampleSlackHubObserver } from "@/observer/ExampleSlackHubObserver";
import { SlackHubMessageObserver } from "@/observer/SlackHubMessageObserver";
import { SlackEventsSubject } from "@/subject/SlackEventsSubject";
import { App } from "@slack/bolt";

const app = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: SLACK_SIGNING_SECRET,
});

const subject = new SlackEventsSubject(app);
subject.addObserver(new ExampleSlackHubObserver());
subject.addObserver(new SlackHubMessageObserver());
subject.init();

app
  .start(PORT)
  .then(() => console.log(`Server running at http://localhost:${PORT}`));
