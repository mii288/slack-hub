import { MessageContext, BaseSlackHubObserver } from "@/observer/BaseSlackHubObserver";

const isBotMessage = ({ message }: MessageContext): boolean => {
	return message.subtype === 'bot_message'
}

export class ExampleSlackHubObserver implements BaseSlackHubObserver {
	 async update(context: MessageContext) {
		 const { say, message } = context
		 if (isBotMessage(context)) return;
		 // refs: https://github.com/slackapi/bolt-js/issues/826
		 const user = (message as any).user
		 await say({ text: `Say hello! <@${user}>`, thread_ts: message.ts })
	}
}
