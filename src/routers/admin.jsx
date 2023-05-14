import AdminPage from "@/pages/admin/AdminPage";
import AdminLayout from "@/layout/AdminLayout";
import GuardRouteAdmin from "./GuardRouteAdmin";

// Xem cấu trúc route ở https://reactrouter.com/en/main/routers/create-browser-router#routes
export default function init(routes) {
  const route = {
    path: "/",

    element: <AdminLayout />,
    children: [
      {
        path: "admin",

        element: (
          <GuardRouteAdmin>
            <AdminPage />
          </GuardRouteAdmin>
        ),
      },
    ],
  };

  routes.push(route);
}
