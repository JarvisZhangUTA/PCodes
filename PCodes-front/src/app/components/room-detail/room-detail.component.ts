import {Component, Input, OnInit} from '@angular/core';
import {Problem} from '../../models/problem.model';
import {ActivatedRoute, Params} from '@angular/router';
import {DataService} from '../../services/data/data.service';
import {default_content} from '../../../assets/values/default-content';
import {CollaborateService} from '../../services/collaborate/collaborate.service';
import swal from 'sweetalert2';
import {Room} from '../../models/room.model';
import {Subscription} from 'rxjs/Subscription';
import {DomSanitizer} from '@angular/platform-browser';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

declare const ace: any;

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {
  subscription: Subscription;
  room: Room;

  email: string;
  sessionId: string;

  problem: Problem;
  editor: any;

  language = 'Java';
  languages = ['Java', 'Python'];

  result;

  constructor(
    private sanitizer: DomSanitizer,
    private collaborateService: CollaborateService,
    private router: ActivatedRoute,
    private dataService: DataService,
    private spinnerService: Ng4LoadingSpinnerService
  ) { }

  ngOnInit() {

    this.router.params.subscribe((params: Params) => {
      this.sessionId = params['sessionId'];
      this.email = localStorage.getItem('email');

      const id = this.sessionId.split('^')[0];
      this.dataService.getProblem(+id)
        .then(problem => {
          this.problem = problem;
        });

      this.initEditor();
      this.collaborateService.init(this.sessionId, this.email, this.editor);
      this.collaborateService.restoreBuffer();
      this.subscription = this.collaborateService.getRoom(this.sessionId)
        .subscribe(res => this.room = res);
    });

  }

  initEditor() {
    this.editor = ace.edit('editor');
    this.editor.setTheme('ace/theme/monokai');
    this.changeLang('Java');
    this.editor.lastAppliedChange = null;

    // register change callback
    this.editor.on('change', (e) => {
      if (this.editor.lastAppliedChange !== e) {
        this.collaborateService.change(JSON.stringify(e));
      }
    });

    this.editor.getSession().getSelection().on('changeCursor', () => {
      const cursor = this.editor.getSession().getSelection().getCursor();
      this.collaborateService.cursorMove(JSON.stringify(cursor));
    });
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
