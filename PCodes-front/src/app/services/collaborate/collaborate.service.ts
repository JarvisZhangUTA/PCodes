import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Room} from '../../models/room.model';

declare const io: any;
declare const ace: any;

const empty_room: Room = {
  sessionId: '',
  owner: '',
  problem: 0,
  members: []
};

@Injectable()
export class CollaborateService {
  private publisher;
  private room;
  private markers;

  collSocket: any;

  constructor(private http: Http) { }

  init(sessionId: string, email: string, editor: any): void {
    console.log('Client init SocketIO');

    this.markers = {};
    this.publisher = new BehaviorSubject<Room>(empty_room);
    this.collSocket = io(window.location.origin, { query: 'data=' + sessionId + '^' + email});

    this.collSocket.on('change', (delta: string) => {
      console.log('Client receive change');
      delta = JSON.parse(delta);
      editor.lastAppliedChange = delta;
      editor.getSession().getDocument().applyDeltas([delta]);
    });

    this.collSocket.on('cursorMove', (res: string) => {
      console.log('Client receive cursorMove');

      const session = editor.getSession();
      const cursor = JSON.parse(res);

      const x = cursor['row'];
      const y = cursor['column'];
      const id = cursor['id'];

      if ( id in this.markers ) {
        session.removeMarker( this.markers[id] );
      } else {
        const member = this.room['members'].find(o => o.id === id);
        const color = member ? member.color : '#FFFFFF';
        const css = document.createElement('style');
        css.type = 'text/css';
        css.innerHTML = `.cursor-${id} {position:absolute;z-index:100;background:${color};width:3px !important;}`;
        document.body.appendChild(css);
      }

      const Range = ace.require('ace/range').Range;
      const marker = session.addMarker(new Range(x, y, x, y + 1), `cursor-${id}`, true);
      this.markers[id] = marker;
    });

    this.collSocket.on('memberChange', () => {
      console.log('Client receive member change');
      this.getRoom(sessionId);
    });
  }

  restoreBuffer() {
    this.collSocket.emit('restoreBuffer');
  }

  change(delta: string) {
    this.collSocket.emit('change', delta);
  }

  cursorMove(cursor: string) {
    this.collSocket.emit('cursorMove', cursor);
  }

  getRoom(sessionId: string): Observable<Room>  {
    this.http.get('api/v1/rooms/' + sessionId)
      .toPromise()
      .then((res: Response) => {
        this.room = res.json();
        this.publisher.next(res.json());
      });
    return this.publisher.asObservable();
  }

  getRooms() {
    return this.http.get('api/v1/rooms')
      .toPromise()
      .then((res: Response) => res.json());
  }
}
