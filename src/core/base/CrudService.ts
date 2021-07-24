import CrudOperations from './CrudOperations';
import KeyValue from './KeyValue';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default abstract class CrudService<M> implements CrudOperations<M> {
  gateway: CrudOperations<M>;

  constructor({ entityGateway: gateway }) {
    this.gateway = gateway;
  }

  async save(model: M) {
    return this.gateway.save(model);
  }

  async saveAll(models: M[]) {
    return this.gateway.saveAll(models);
  }

  async find(searchCriteria: KeyValue<any>) {
    return this.gateway.find(searchCriteria);
  }

  async findAll() {
    return this.gateway.findAll();
  }

  async exists(searchCriteria: KeyValue<any>) {
    return this.gateway.exists(searchCriteria);
  }

  async count(searchCriteria: KeyValue<any>) {
    return this.gateway.count(searchCriteria);
  }

  async replace(searchCriteria: KeyValue<any>, model: M) {
    return this.gateway.replace(searchCriteria, model);
  }

  async delete(searchCriteria: KeyValue<any>) {
    return this.gateway.delete(searchCriteria);
  }

  async patch(searchCriteria: KeyValue<any>, patches: Array<KeyValue<any>>) {
    return this.gateway.patch(searchCriteria, patches);
  }
}
