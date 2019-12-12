import getAsync from '../HttpAsync';
import Route from './Route';

export default class RouteClient {
  private readonly url = new URL('http://mbus.doublemap.com/map/v2/routes');

  public async GetRoutes(): Promise<Route[]> {
    return await getAsync(this.url);
  }
}
