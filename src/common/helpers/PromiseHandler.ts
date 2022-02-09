import { fromPromise, IPromiseBasedObservable } from "mobx-utils";

export function MobXPromise(promise: Promise<any>): IPromiseBasedObservable<any> {
    var res: any;
    fromPromise(promise).case({})
    return fromPromise(promise);
}