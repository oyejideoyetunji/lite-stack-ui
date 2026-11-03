import type { RouteObject } from "react-router";
import { AppEntrypoint, ErrorBoundary } from "./app.entrypoint";
import { Home } from "./features/home";
import { Projects } from "./features/projects";

export const routes: RouteObject[] = [
    {
        path: "",
        Component: AppEntrypoint,
        ErrorBoundary: ErrorBoundary,
        children: [
            {
                path: "",
                Component: Home,
            },
            {
                path: "projects",
                Component: Projects,
            }
        ]
    }
];
