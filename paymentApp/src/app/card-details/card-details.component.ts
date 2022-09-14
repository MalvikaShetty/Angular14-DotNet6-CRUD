import { Component, OnInit } from '@angular/core';
import { CardDetails } from '../shared/card-details.model';
import { CardDetailsService } from '../shared/card-details.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  constructor(public service:CardDetailsService) { }

  ngOnInit(): void {
    this.service.getListDetails();
  }

  populateForm(selectedRecord:CardDetails){
    this.service.formData =Object.assign({},selectedRecord) ;
  }

  onDelete(id:number){
    if(confirm("Are you sure you want to delete?")==true){
      this.service.deleteCardDetails(id).subscribe(
        res=>{
          this.service.getListDetails();
          alert('Deleted details')
        },err=>{console.log(err)}
      )
    }
    else{
      alert("Nothing deleted");
    }
   
  }
}
