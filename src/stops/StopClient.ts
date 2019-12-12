import request from 'request-promise-native';
import RouteClient from '../routes/RouteClient';
import Route from '../routes/Route';
import Stop from './Stop';

export default class StopClient {
  private readonly url = 'http://mbus.doublemap.com/map/v2/stops';
  private readonly routeClient = new RouteClient();

  public async GetStops() {
    const routes = await this.routeClient.GetRoutes();

    const response = await request.get(this.url);
    const stops = JSON.parse(response);

    return this.filterStops(stops, routes);
  }

  private filterStops(stops: Stop[], routes: Route[]): Stop[] {
    let activeStops: Set<number> = new Set();
    routes.forEach(route => {
      route.stops.forEach(stop => {
        activeStops.add(stop);
      });
    });

    return stops.filter(stop => activeStops.has(stop.id));
  }
}
