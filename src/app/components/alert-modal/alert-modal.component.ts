import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css'],
})
export class AlertModalComponent implements OnInit {
  message: string = '';
  showModal: boolean = false;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertService.getAlert().subscribe((msg) => {
      this.message = msg;
      this.showModal = true;
    });
  }

  close() {
    this.showModal = false;
  }
}
