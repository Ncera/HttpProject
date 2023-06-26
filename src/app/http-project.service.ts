import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpProjectService {
myUrl: string ="https://api.agify.io?name=Nceba";

  constructor(private http :HttpClient) { }

  getName():Observable<any>{
    return this.http.get(this.myUrl);

    
  }
}
