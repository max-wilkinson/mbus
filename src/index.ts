import RouteClient from './routes/RouteClient';
import EtaClient from './etas/EtaClient';

const routeClient = new RouteClient();
routeClient.GetRoutes().then(routes => {
  // console.log(routes);
});

const etaClient = new EtaClient();
etaClient.GetEtas(137).then(etas => {
  // console.log(etas);
});
