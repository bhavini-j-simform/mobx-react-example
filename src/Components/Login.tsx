import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const Login = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = async () => {
    await loginStore.login(username, password);
    navigate("/taskList");
  };

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) =>
    setUserName(event.target.value);
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  return (
    <div className="container text-md-start">
    <main>
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="row g-3 mb-3">
          <div className="col-sm-6">
            <label htmlFor="userName" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={username}
              onChange={onChangeUserName}
            />
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-sm-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>
        <div className="row g-3 mb-3">
          <div className="col-sm-6">
            <button
              onClick={onLogin}
              className="w-100 btn btn-lg btn-primary"
              type="button"
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
    </main>
    </div>
  );
});
