import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  return params.listItemId;
}

export function ListItem() {
  const listItemId = useLoaderData();

  return (
    <div>
      <h3>{listItemId}</h3>
    </div>
  );
}