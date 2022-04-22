import React from "react";
import { useRecoilValue } from "recoil";
import { serversSelectors } from "../../store/servers/server";
import { ServerResponse } from "../../store/types/Server";
import { ServerCard } from "../ServerCard/ServerCard";
import { ServerListContainer, ServersWrapper } from "./Servers.style";

export function Servers() {
  const servers: ServerResponse = useRecoilValue(serversSelectors(undefined));

  return (
    <>
      <ServersWrapper>
        <span>
          <b>{servers.total}</b> servers found
        </span>
      </ServersWrapper>
      <ServerListContainer>
        {servers.servers.map((server, id) => (
          <ServerCard key={id} server={server} />
        ))}
      </ServerListContainer>
    </>
  );
}
