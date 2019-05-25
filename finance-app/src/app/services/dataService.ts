import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel, DataModelResponse } from '../interfaces/dataModel';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  async getData() {
    return this.http.get<DataModelResponse>(this.baseUrl+'/data').toPromise();
  }

  async saveData(data: DataModel) {
    return this.http.put<DataModel>(this.baseUrl+'/data', data).toPromise();
  }
}