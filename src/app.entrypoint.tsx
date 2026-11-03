import { Outlet } from "react-router";

export function AppEntrypoint() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export function ErrorBoundary() {
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
        </div>
    );
}
