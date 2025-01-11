import { toast } from "sonner";
export const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
      </form>
      <button onClick={() => toast("My first toast")}>
        <span>Render a toast</span>
      </button>
    </div>
  );
};
