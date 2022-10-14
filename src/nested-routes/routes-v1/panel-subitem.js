import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.panelSubitemId;
}

export function PanelSubitem() {
  const panelSubitemId = useLoaderData();

  return (
    <div>
      {panelSubitemId}
    </div>
  );
}