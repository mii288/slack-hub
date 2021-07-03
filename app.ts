import { PORT, SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET } from "@/config";
import { SlackEventsSubject } from "@/subject/SlackEventsSubject";
import { App } from "@slack/bolt";
import { ExampleSlackHubObserver } from "@/observer/ExampleSlackHubObserver";

const app = new App({
  token: SLACK_BOT_TOKEN,
  signingSecret: SLACK_SIGNING_SECRET,
});

const subject = new SlackEventsSubject(app);
subject.addObserver(new ExampleSlackHubObserver());
subject.init();

app.start(PORT).then(() => console.log("Running"));
