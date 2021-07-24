import * as asyncHooks from 'async_hooks';
import RestRequest from '../utils/client/RestRequest';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class RequestContext {
  private store: Map<number, RestRequest>;
  private hook: asyncHooks.AsyncHook;

  constructor() {
    this.store = new Map<number, RestRequest>();
    this.hook = asyncHooks.createHook({
      init: this.init.bind(this),
      destroy: this.destroy.bind(this),
    });
    this.hook.enable();
  }

  public saveRequest(request: RestRequest): RestRequest {
    this.store.set(asyncHooks.executionAsyncId(), request);
    return request;
  }

  public getRequest(): RestRequest {
    return this.store.get(asyncHooks.executionAsyncId());
  }

  private init(asyncId: number, _: string, triggerAsyncId: number): void {
    if (this.store.has(triggerAsyncId)) {
      this.store.set(asyncId, this.store.get(triggerAsyncId));
    }
  }

  private destroy(asyncId: number): void {
    if (this.store.has(asyncId)) {
      this.store.delete(asyncId);
    }
  }
}
