import { Outlet } from "@remix-run/react";
import { LinksFunction, LoaderArgs } from "@remix-run/server-runtime";

import defaultStylesheetUrl from "../styles/default.css";
import trabianStylesheetUrl from "../styles/trabian.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: defaultStylesheetUrl },
    // { rel: "stylesheet", href: trabianStylesheetUrl },
  ];
};

export const loader = ({ params }: LoaderArgs) => {
  return {
    clientId: params.clientId,
  };
};

export default function ClientLayout() {
  return <Outlet />;
}
