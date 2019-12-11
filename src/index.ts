import RouteClient from './routes/RouteClient';
import EtaClient from './etas/EtaClient';
import StopClient from './stops/StopClient';

const etaClient = new EtaClient();
etaClient.GetEtas(137).then(etas => {
  // console.log(etas);
});

const routeClient = new RouteClient();
routeClient.GetRoutes().then(routes => {
  // console.log(routes);
});

const stopClient = new StopClient();
stopClient.GetStops().then(stops => {
  // console.log(stops);
});

export { RouteClient, EtaClient, StopClient };
