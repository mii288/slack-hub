import { BaseObserver } from "@/observer/BaseObserver";
import { AllMiddlewareArgs, SlackEventMiddlewareArgs } from "@slack/bolt";

export type MessageContext = SlackEventMiddlewareArgs<"message"> & AllMiddlewareArgs
export type BaseSlackHubObserver = BaseObserver<MessageContext> 
