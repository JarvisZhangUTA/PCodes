import {Component, OnInit} from '@angular/core';
import {Problem} from '../../models/problem.model';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../../services/data/data.service';
import {default_content} from '../../../assets/values/default-content';
import swal from 'sweetalert2';
import {AuthService} from '../../services/auth/auth.service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
declare const ace: any;

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  sessionId: string;
  problem: Problem;
  editor: any;

  language = 'Java';
  languages = ['Java', 'Python'];

  result;

  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private authService: AuthService,
    private router: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.router.params.subscribe((params: Params) => {
      this.dataService.getProblem(+params['id'])
        .then(problem => {
          this.problem = problem;
          if (this.authService.isAuthenticated()) {
            this.sessionId = this.problem.id + '^' + localStorage.getItem('email');
          }
        });
    });

    this.initEditor();
  }

  initEditor() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/monokai');
    this.changeLang('Java');
  }

  changeLang(lang) {
    this.language = lang;
    this.editor.setValue(default_content[this.language]);
    this.editor.getSession().setMode('ace/mode/' + this.language.toLowerCase());
  }

  resetEditor() {
    swal({
      title: 'Are you sure?',
      text: 'Gonna lose your code',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Reset'
    }).then(() => {
      this.changeLang(this.language);
    }, function () {
    });
  }

  submitCode() {
    this.spinnerService.show();
    const userCode = this.editor.getValue();

    const userData = {
      code: userCode,
      lang: this.language.toLowerCase()
    };

    this.dataService.submitCode(userData)
      .then(res => {
        this.spinnerService.hide();
        this.result = res;
      });
  }
}
