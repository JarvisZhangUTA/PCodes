import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data/data.service';
import {CollaborateService} from '../../services/collaborate/collaborate.service';
import {Room} from '../../models/room.model';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms: Room[];

  constructor(
    private collaborateService: CollaborateService,
    private dataService: DataService) { }

  ngOnInit() {
    this.getRooms();
  }

  getRooms() {
    this.collaborateService.getRooms()
      .then(res => {
        this.rooms = Object.values(res);
      });
  }
}
