export default interface Route {
  id: number;
  name: string;
  stops: number[];
  description?: string;
  color?: string;
  active?: boolean;
}
