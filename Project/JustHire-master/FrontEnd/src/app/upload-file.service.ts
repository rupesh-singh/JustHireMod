import {Injectable} from '@angular/core';
import {HttpClient, HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UploadFileService {

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'https://justhire-wissen.herokuapp.com/api/question/bank', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>('https://justhire-wissen.herokuapp.com/api/question/bank');
  }
}
