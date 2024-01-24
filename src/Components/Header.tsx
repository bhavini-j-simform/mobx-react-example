import { observer } from "mobx-react-lite";
import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../Hooks/useStore";

export const Header = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();
  const navigate = useNavigate();
  const onLogout = () => {
    loginStore.logout();
    navigate("/login");
  };
  return (
    <div className="container bg-dark text-white">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
        <Link
          to="/taskList"
          className="text-white d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          React Project With MobX
        </Link>

        <div className="col-md-8 text-end">
          {!loginStore.getUserToken && (
            <>
              <Link to="/login" className="btn btn-outline-primary me-2">
                Login
              </Link>
            </>
          )}
          {loginStore.getUserDetails?.firstName && (
            <>
              <span className="me-2">
                Welcome {loginStore.userDetails?.firstName}
                {loginStore.userDetails?.lastName}
              </span>
              <Link to="/addTask" className="btn btn-primary me-2">
                Add Task
              </Link>
              <Link to="/taskList" className="btn btn-primary me-2">
                Task List
              </Link>
              <button
                onClick={onLogout}
                type="button"
                className="btn btn-primary me-2"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
    </div>
  );
});
