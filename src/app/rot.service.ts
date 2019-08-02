import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class RotService {
    rotBanana(): Observable<any> {
        console.log('ROT BANANA');
        const milliseconds = 3000;

        return Observable.create(observer => {
            setTimeout(() => {
                console.log('Done waiting');
                observer.next('brown');
                observer.complete();
            }, milliseconds);
        });
    }
}
