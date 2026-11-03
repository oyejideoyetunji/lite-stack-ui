import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export function Projects() {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(false);

    const [param] = useSearchParams()

    useEffect(() => {
        console.log(param.get("installation_id"));
        setLoading(true);
        fetch("https://lite-stack-service.onrender.com/")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (<div>Loading...</div>)
    }

    if (!data) {
        return (<div>No data...</div>)
    }

    return (
        <main>
            <header>
                <h1>Projects</h1>
                <p>{JSON.stringify(data)}</p>
            </header>
        </main>
    );
}
