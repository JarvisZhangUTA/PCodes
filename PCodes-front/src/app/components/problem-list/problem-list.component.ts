import {Component, OnDestroy, OnInit} from '@angular/core';
import { Problem } from '../../models/problem.model';
import {DataService} from '../../services/data/data.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit, OnDestroy {
  difficulties: string[];
  subscription: Subscription;
  problems: Problem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.difficulties = ['', 'Easy1', 'Easy2', 'Easy3', 'Medium1', 'Medium2', 'Medium3', 'Hard1', 'Hard2', 'Hard3'];
    this.getProblems();
  }

  getProblems(): void {
    this.subscription = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
