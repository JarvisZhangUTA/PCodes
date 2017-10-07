import {Routes, RouterModule} from '@angular/router';
import {ProblemListComponent} from './components/problem-list/problem-list.component';
import {ProblemDetailComponent} from './components/problem-detail/problem-detail.component';
import {NewProblemComponent} from './components/new-problem/new-problem.component';
import {CallbackComponent} from './components/callback/callback.component';
import {RoomListComponent} from './components/room-list/room-list.component';
import {RoomDetailComponent} from './components/room-detail/room-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'problems',
    pathMatch: 'full'
  },
  {
    path: 'problems',
    component: ProblemListComponent
  },
  {
    path: 'problem/:id',
    component: ProblemDetailComponent
  },
  {
    path: 'rooms',
    component: RoomListComponent
  },
  {
    path: 'room/:sessionId',
    component: RoomDetailComponent
  },
  {
    path: 'new-problem',
    component: NewProblemComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '**',
    redirectTo: 'problems'
  }
];

export const routing = RouterModule.forRoot(routes);
