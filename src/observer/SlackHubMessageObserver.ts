import {
  BaseSlackHubObserver,
  MessageContext,
} from "@/observer/BaseSlackHubObserver";
import axios from "axios";

export class SlackHubMessageObserver implements BaseSlackHubObserver {
  endpointUrls: string[];

  constructor() {
    // TODO: 一旦ベタ書き
    this.endpointUrls = ["http://localhost:3001"];
  }

  async update(context: MessageContext) {
    const { logger, message } = context;
    try {
      const params = {
        type: "message",
        payload: JSON.stringify(message),
      };

      await Promise.all(
        this.endpointUrls.map((url) => axios.get(url, { params }))
      );
    } catch (error) {
      logger.error(error);
    }
  }
}
