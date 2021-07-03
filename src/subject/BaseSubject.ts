import { BaseObserver } from "../observer/BaseObserver";

export class BaseSubject<T> {
  observerList: BaseObserver<T>[] = [];

  addObserver(observer: BaseObserver<T>) {
    this.observerList.push(observer);
  }

  notifyObservers(context: T) {
    this.observerList.map((o) => o.update(context));
  }
}
