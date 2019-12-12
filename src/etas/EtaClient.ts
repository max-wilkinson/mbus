import request from 'request-promise-native';
import Eta from './Eta';

export default class EtaClient {
  private readonly url = 'http://mbus.doublemap.com/map/v2/eta?stop=';

  public async GetEtas(stopId: number): Promise<Eta[]> {
    const response = await request.get(this.url + stopId);
    const etas: Eta[] = JSON.parse(response)['etas'][stopId]['etas'];
    return Promise.resolve(etas);
  }
}
