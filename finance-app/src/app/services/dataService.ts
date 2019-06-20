import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataModel, DataModelResponse } from '../interfaces/dataModel';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  async getData(): Promise<DataModel> {
    const response = await this.http.get<DataModelResponse>(this.baseUrl+'/data').toPromise();
    return this.mapDataModelResponse(response);
  }

  async saveData(data: DataModel): Promise<DataModel> {
    const response = await this.http.put<DataModelResponse>(this.baseUrl+'/data', data).toPromise();
    return this.mapDataModelResponse(response);
  }

  private mapDataModelResponse(response: DataModelResponse): DataModel {
    const returnValue: DataModel = {
      earnings: [],
      expenses: {
        yearly: [],
        monthly: [],
        weekly: []
      },
      taxBands: []
    }
    if (response) {
      returnValue.earnings = response.earnings || [];
      returnValue.taxBands = response.taxBands;
      if(response.expenses) {
        returnValue.expenses = {
          yearly: response.expenses.yearly || [],
          monthly: response.expenses.monthly || [],
          weekly: response.expenses.weekly || []
        }
      }
    }
    return returnValue;
  }
}