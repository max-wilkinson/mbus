import getAsync from '../HttpAsync';
import Eta from './Eta';

export default class EtaClient {
  private readonly url = 'http://mbus.doublemap.com/map/v2/eta?stop=';

  public async GetEtas(stopId: number): Promise<Eta[]> {
    const response = await getAsync(new URL(this.url + stopId));
    const etas: Eta[] = response['etas'][stopId]['etas'];
    return Promise.resolve(etas);
  }
}
