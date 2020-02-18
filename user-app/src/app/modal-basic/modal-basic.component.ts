import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../classes/User';


@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css']
})
export class ModalBasicComponent implements OnInit {
  closeResult: string;
  private __userSelected: User;
  private userCopy: User;


  @Output('onSaveUser') onSaveUser = new EventEmitter<User>();

  @Input('user-selected') set userSelected(userSelected) {
    this.__userSelected = userSelected;
    this.userCopy = Object.assign({}, userSelected);
  }
  get userSelected() {
    return this.__userSelected;
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {

  }


  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
