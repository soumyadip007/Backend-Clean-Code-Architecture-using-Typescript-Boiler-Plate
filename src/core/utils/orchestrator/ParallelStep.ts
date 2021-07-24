import SingleStep from './SingleStep';
import Step from './Step';
import { compose } from 'src/core/utils/compose';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class ParallelStep implements Step<any, any> {
  steps: SingleStep[];

  constructor(...steps: SingleStep[]) {
    this.steps = steps;
  }

  async execute(request: any) {
    return this.merge(
      await Promise.all(compose(...this.steps.map((step) => step.execute))(request)),
    );
  }

  protected merge(responses: any[]) {
    return responses;
  }
}
