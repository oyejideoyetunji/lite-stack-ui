import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { apiClient } from "../../shared/lib";
import { storage } from "../../shared/lib/storage";

export function GithubSetup() {
  const [param] = useSearchParams()
  const code = param.get("code");
  const state = param.get("state")
  const installationId = param.get("installation_id");
  console.log(code, state, installationId);
  const CompleteInstallMutation = useMutation({
    mutationFn: async () => {
      if (!code || !state || !installationId) return;

      return await apiClient.post(
        `https://lite-stack-service.onrender.com/api/v1/github/installations/complete`,
        // "/api/v1/github/installations/complete",
        { code, state, installationId }
      )
    },
    onSuccess(data) {
      console.log(data?.data);
    },
    onError(error) {
      console.log(error);
    }
  });
  function handleCompleteInstall() {
    CompleteInstallMutation.mutate()
  }


  const RegisterMutation = useMutation({
    mutationFn: async () => {
      return await apiClient.post(
        "https://lite-stack-service.onrender.com/api/v1/auth/register",
        // "/api/v1/auth/register",
        {
          "email": "first_user_@mail.com",
          "username": "first_user",
          "password": "password@123"
        }
      )
    },
    onSuccess(data) {
      console.log(data?.data);
    },
  })
  function handleRegister() {
    RegisterMutation.mutate()
  }




  const LoginMutation = useMutation({
    mutationFn: async () => {
      return await apiClient.post(
        "https://lite-stack-service.onrender.com/api/v1/auth/login",
        // "/api/v1/auth/login",
        {
          email: "first_user_@mail.com",
          password: "password@123"
        }
      )
    },
    onSuccess(data) {
      console.log(data?.data?.token);

      storage.set("access_token", data?.data?.token)
    },
  })
  function handleLogin() {
    LoginMutation.mutate()
  }




  const StartInstallMutation = useMutation({
    mutationFn: async () => {
      return await apiClient.post(
        `https://lite-stack-service.onrender.com/api/v1/github/installations/start`
        // "/api/v1/github/installations/start"
      )
    },
    onSuccess(data) {
      console.log(data?.data);
    },
  })
  function handleStartInstall() {
    StartInstallMutation.mutate()
  }





  function handleInstall() {
    window.open(`
      https://github.com/apps/lyte-stack/installations/new?state=6ac816d7017de72018bc9261e80e0fd1082d6daea0f92440c2ccd14c4cb54eef
      `, "_blank")
  }

  return (
    <main className="w-full min-h-screen flex items-center justify-center p-6">
      <section className=" w-full h-full space-y-8 md:w-100 md:h-[80vh] md:shadow">
        <div className="flex items-center justify-center">
          <button
            onClick={handleRegister}
            className="w-50 py-2 flex items-center justify-center bg-blue-300 border-0 outline-0 rounded cursor-pointer">
            <span>{RegisterMutation.isPending ? "Loading..." : "Register"}</span>
          </button>
        </div>


        <div className="flex items-center justify-center">
          <button
            onClick={handleLogin}
            className="w-50 py-2 flex items-center justify-center bg-blue-300 border-0 outline-0 rounded cursor-pointer">
            <span>{LoginMutation.isPending ? "Loading..." : "Login"}</span>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleStartInstall}
            className="w-50 py-2 flex items-center justify-center bg-blue-300 border-0 outline-0 rounded cursor-pointer">
            <span>Start Install</span>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleInstall}
            className="w-50 py-2 flex items-center justify-center bg-blue-300 border-0 outline-0 rounded cursor-pointer">
            <span>Install</span>
          </button>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={handleCompleteInstall}
            className="w-50 py-2 flex items-center justify-center bg-blue-300 border-0 outline-0 rounded cursor-pointer">
            <span>Complete Install</span>
          </button>
        </div>
      </section>
    </main>
  );
}
