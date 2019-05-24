import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../interfaces/dataModel';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  async getData() {
    return this.http.get<DataModel>(this.baseUrl+'/data').toPromise();
  }

  async saveData(data: DataModel) {
    return this.http.put<DataModel>(this.baseUrl+'/data', data).toPromise();
  }
}