import SingleStep from './SingleStep';
import ParallelStep from './ParallelStep';
import Step from './Step';

/**
 * 
 * @author Soumyadip Chowdhury
 * @github soumyadip007
 *
 */


export default class Orchestrator {
  private orchestration: Step<any, any>[];

  private constructor() {
    this.orchestration = [];
  }

  static composite() {
    return new Orchestrator();
  }

  series(step: SingleStep) {
    this.orchestration.push(step);
  }

  parallel(step: ParallelStep) {
    this.orchestration.push(step);
  }

  async orchestrate(request: any) {
    let intermediate = request;
    for (let i = 0; i < this.orchestration.length; i++) {
      intermediate = await this.orchestration[i].execute(intermediate);
    }
    return intermediate;
  }
}
