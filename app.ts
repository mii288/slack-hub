import { PORT, SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET } from '@/config'
import { SlackEventsSubscriber } from '@/SlackEventsSubscriber';
import { App } from '@slack/bolt'

const app = new App({
	token: SLACK_BOT_TOKEN,
	signingSecret: SLACK_SIGNING_SECRET
});

new SlackEventsSubscriber(app).start()

app.start(PORT).then(() => console.log('Running'))