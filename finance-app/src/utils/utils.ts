import { DataModel, TaxBandModel } from '../interfaces/dataModel';
import { getMaxListeners } from 'cluster';

export class Utils {
    static GetEarningsAfterTax(data: DataModel) {
        const earningsAfterTax = data.earnings.map(earning => {
            const valueAfterTax = 
        })
    }

    private calcValueAfterTax(value: number, taxBands: TaxBandModel[]) {
        const values = taxBands.map((band, index) => {
            if (index === 0) {
                return Math.min(value, band.earning)*band.percentage*0.01;
            }
        })
    }
}