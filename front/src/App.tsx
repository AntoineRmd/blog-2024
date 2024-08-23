import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import PostLayout from "./layouts/PostLayout"
import ProfileLayout from "./layouts/ProfileLayout"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import PostPage from "./pages/PostPage"
import CreatePostPage from "./pages/CreatePostPage"
import EditPostPage from "./pages/EditPostPage"
import ProfilePage from "./pages/ProfilePage"
import EditProfilePage from "./pages/EditProfilePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path:  "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/posts", element: <HomePage /> },

      {
        path: "post",
        element: <PostLayout />,
        children: [
          { path: ":id", element: <PostPage /> },
          { path: "create", element: <CreatePostPage /> },
          { path: ":id/edit", element: <EditPostPage /> }
        ]
      },

      {
        path: "user",
        element: <ProfileLayout />,
        children: [
          { path: "", element: <ProfilePage /> },
          { path: ":id", element: <ProfilePage /> },
          { path: "edit", element: <EditProfilePage /> }
        ]
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
