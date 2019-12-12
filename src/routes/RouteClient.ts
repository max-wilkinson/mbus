import request from 'request-promise-native';
import Route from './Route';

export default class RouteClient {
  private readonly url = 'http://mbus.doublemap.com/map/v2/routes';

  public async GetRoutes(): Promise<Route[]> {
    const response = await request.get(this.url);
    return Promise.resolve(JSON.parse(response));
  }
}
