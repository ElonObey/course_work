import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

interface User{
    email:string
    password:string
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
     
    constructor(private http: HttpClient) {
    }
      
    login(email:string, password:string ) : Observable<{token: string}> {
        return this.http.post<User>('/api/login', {email, password}).pipe(
            shareReplay()
        );
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            
    }
}

function shareReplay(): import("rxjs").OperatorFunction<User, { token: string; }> {
    throw new Error('Function not implemented.');
}
