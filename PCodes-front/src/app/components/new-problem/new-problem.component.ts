import { Component, OnInit } from '@angular/core';
import {Problem} from '../../models/problem.model';
import {DataService} from '../../services/data/data.service';

const default_problem: Problem = Object.freeze({
  id: -1,
  title: '',
  description: '',
  difficulty: 1
});

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
  problem: Problem = Object.assign({}, default_problem );
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addProblem(): void {
    if (this.problem.title.length > 0 && this.problem.description.length > 0) {
      this.dataService.addProblem(this.problem)
        .catch(error => console.log(error));
      this.problem = Object.assign({}, default_problem);
    }
  }
}
