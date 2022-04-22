import { Server } from "../../store/types/Server";
import { ServerCardContainer } from "./ServerCard.style";

type ServerCardProps = {
  server: Server;
};

export function ServerCard({ server }: ServerCardProps) {
  return (
    <ServerCardContainer>
      <p>Server: {server.server}</p>
      <p>Memory: {server.memory}</p>
      <p>Storage: {server.storage}</p>
      <p>Location: {server.location}</p>
      <p>Price: {server.price}</p>
    </ServerCardContainer>
  );
}
