declare namespace NodeJS {
	interface ProcessEnv {
		SLACK_BOT_TOKEN: string
		SLACK_SIGNING_SECRET: string
		PORT: number
	}
}
