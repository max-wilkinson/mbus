import getAsync from '../HttpAsync';
import RouteClient from '../routes/RouteClient';
import Route from '../routes/Route';
import Stop from './Stop';

export default class StopClient {
  private readonly url = new URL('http://mbus.doublemap.com/map/v2/stops');
  private readonly routeClient = new RouteClient();

  public async GetStops() {
    const routes = await this.routeClient.GetRoutes();
    const stops = await getAsync(this.url);

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
