import { useEffect } from "react";

function ConfirmEmail() {
    useEffect(() => {
        (async function () {
            const token = window.location.search.split('=')[1];
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/auth/confirmEmail/${token}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
            console.log(data);
        })();
    }, [])
    
    return (
        <div>
            <h1>Confirm Email</h1>
        </div>
    );
}

export default ConfirmEmail;