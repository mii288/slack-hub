import { App } from '@slack/bolt'

export class SlackEventsSubscriber {
	app: App
	constructor(app: App) {
		this.app = app
	}

	start() {
		this.handleMessagePing()
	}
	
	handleMessagePing() {
		this.app.message('ping', async ({ message, say }) => {
			// @ts-ignore
			await say(`Hey there <@${message.user}>!`)
		})
	}
}