export interface BaseObserver<T> {
	update(context: T): void 
}
