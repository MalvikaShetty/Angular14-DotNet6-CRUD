import { Injectable } from '@angular/core';
import { CardDetails } from './card-details.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor(private http:HttpClient) { }

  readonly baseURL='https://localhost:7101/api/CardDetail'
  formData:CardDetails=new CardDetails();
  list: CardDetails[];

  postCardDetails(card:CardDetails): Observable<any>{
    return this.http.post<any>(this.baseURL, this.formData);
  }

  getListDetails(){
    this.http.get(this.baseURL).toPromise().then(res=> this.list = res as CardDetails[]);
   
  }

  putCardDetails(): Observable<any>{
    return this.http.put<any>(this.baseURL+'/'+ this.formData.paymentDetailId , this.formData);
  }

  deleteCardDetails(id:number): Observable<any>{
    return this.http.delete<any>(this.baseURL+'/'+ id);
  }

}
