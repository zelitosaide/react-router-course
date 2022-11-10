import { Form, redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const user = formData.get("user");

  const response = await fetch("...", {
    method: "POST",
    body: JSON.stringify({ user }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const { playlistId } = await response.json();
  return redirect(`/${playlistId}`);
}

export async function redirectIfUser() {}

export function LoginPage() {
  return (
    <Form method="post">
      <p>
        <label htmlFor="user">User</label>
        <input
          required
          id="user"
          type="text"
          name="user"
        />
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </Form>
  );
}
