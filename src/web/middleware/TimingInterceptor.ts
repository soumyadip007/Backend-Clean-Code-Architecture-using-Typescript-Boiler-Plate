import { CallHandler, ExecutionContext, Inject, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import Context from 'src/core/context/Context';

@Injectable()
export default class TimingInterceptor implements NestInterceptor {
  core: Context;
  constructor(@Inject('Core') context: Context) {
    this.core = context;
  }

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const start = this.core.middleware.startTimer.execute(request);
    return next.handle().pipe(
      tap((response) =>
        this.core.middleware.stopTimer.execute({
          start,
          request,
          response,
        }),
      ),
      catchError((error) => {
        this.core.middleware.stopTimer.execute({
          start,
          request,
          response: error,
        });
        throw error;
      }),
    );
  }
}
