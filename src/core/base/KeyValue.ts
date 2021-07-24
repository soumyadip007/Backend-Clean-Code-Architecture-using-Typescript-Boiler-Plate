export default class KeyValue<V> {
  key: string;
  value: V;

  constructor(key: string, value: V) {
    this.key = key;
    this.value = value;
  }

  toObject(): any {
    return { [this.key]: this.value };
  }
}
