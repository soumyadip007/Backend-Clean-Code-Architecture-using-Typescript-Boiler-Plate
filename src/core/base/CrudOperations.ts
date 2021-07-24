import KeyValue from './KeyValue';


/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default interface CrudOperations<M> {
  save: (model: M) => Promise<M>;
  saveAll: (models: M[]) => Promise<M[]>;
  find: (searchCriteria: KeyValue<any>) => Promise<M[]>;
  findAll: () => Promise<M[]>;
  exists: (searchCriteria: KeyValue<any>) => Promise<boolean>;
  count: (searchCriteria: KeyValue<any>) => Promise<number>;
  replace: (searchCriteria: KeyValue<any>, model: M) => Promise<M>;
  delete: (searchCriteria: KeyValue<any>) => Promise<number>;
  patch: (searchCriteria: KeyValue<any>, patches: Array<KeyValue<any>>) => Promise<boolean>;
}
