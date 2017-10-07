import { Injectable } from '@angular/core';
import {Problem} from '../../models/problem.model';
import {Http, Response, Headers} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  // Observable 自动更新
  getProblems(): Observable<Problem[]> {
    this.http.get('api/v1/problems')
      .toPromise()
      .then((res: Response) => {
        this._problemSource.next(res.json());
      })
      .catch(this.handleError);

    return this._problemSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
     return this.http.get('api/v1/problems/' + id )
                  .toPromise()
                  .then((res: Response) => res.json())
                  .catch(this.handleError);
  }

  addProblem(problem: Problem): Promise<Problem> {
    const headers = new Headers({'content-type' : 'application/json'});
    return this.http.post('api/v1/problems', problem, headers)
      .toPromise()
      .then((res: Response) => {
           this.getProblems();
           return res.json();
      })
      .catch(this.handleError);
  }

  submitCode(data): Promise<any> {
    const headers = new Headers({'content-type' : 'application/json'});
    return this.http.post('api/v1/code_results', data, headers)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }

  handleError(error: any) {
    console.error('Error occured.', error);
    return Promise.reject(error.body || error);
  }
}
