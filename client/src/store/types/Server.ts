export type Server = {
  server: string;
  memory: string;
  storage: string;
  location: string;
  price: string;
};

export type ServerResponse = {
  servers: Server[];
  total: number;
};
