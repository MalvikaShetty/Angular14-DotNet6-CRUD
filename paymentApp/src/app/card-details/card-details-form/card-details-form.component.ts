import { Component, OnInit,Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CardDetails } from 'src/app/shared/card-details.model';
import { CardDetailsService } from 'src/app/shared/card-details.service';

@Component({
  selector: 'app-card-details-form',
  templateUrl: './card-details-form.component.html',
  styleUrls: ['./card-details-form.component.css']
})
export class CardDetailsFormComponent implements OnInit {

  constructor(public service:CardDetailsService) { }
  // formData:CardDetails=new CardDetails();
  
  ngOnInit(): void {
    // this.resetForm();
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new CardDetails();
  }

  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailId==0)
      this.insertDetails(form);
    else
    this.updateDetails(form);
 
  }

  insertDetails(form:NgForm){
    this.service.postCardDetails(this.service.formData)
    .subscribe(
      (      res: any) => {
        alert("Yay entry added")
        this.service.getListDetails();
        console.log(res);
        }, //Bind to view
      (                    err: any) => {
                // Log errors if any
                console.log(err);
            });
            this.resetForm(form);
            
  }

  updateDetails(form:NgForm){
    this.service.putCardDetails()
    .subscribe(
      (      res: any) => {
        alert("Yay entry updated")
        this.service.getListDetails();
        console.log(res);
        }, //Bind to view
      (                    err: any) => {
                // Log errors if any
                console.log(err);
            });
            
            this.resetForm(form);
            
  }

}
