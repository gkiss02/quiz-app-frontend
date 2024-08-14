import { useEffect } from "react"
import { Outlet, useLoaderData, useSubmit } from "react-router-dom"
import { getTokenDuration } from "../Util/auth";

function RootLayout () {
    const token = useLoaderData();
    const submit = useSubmit();
  
    useEffect(() => {
      if (!token) {
        return;
      }

      if (token === 'EXPIRED') {
        submit(null, { action: '/logout', method: 'post' });
        return;
      }

      const tokenDuration = getTokenDuration();

      if (typeof tokenDuration !== 'number') {
        return;
      }

      setTimeout(() => {
        submit(null, { action: '/logout', method: 'post' });
      }, tokenDuration);

  }, [token, submit]);
    return (
        <Outlet></Outlet>
    )
}

export default RootLayout