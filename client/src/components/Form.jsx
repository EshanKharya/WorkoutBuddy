import { useState } from "react";

function Form() {
  const [user, setUser] = useState({ firstname: "", lastname: "" });

  return (
    <div className="w-2/5 flex flex-col items-center border-2 rounded-md p-6">
      <form>
        <div className="m-5">
          <label className="p-2">First Name: </label>
          <input
            className="p-2"
            type="text"
            value={user.firstname}
            onChange={(e) => setUser({ ...user, firstname: e.target.value })}
          />
        </div>
        <div className="m-5">
          <label className="p-2">Last Name: </label>
          <input
            className="p-2"
            type="text"
            value={user.lastname}
            onChange={(e) => setUser({ ...user, lastname: e.target.value })}
          />
        </div>
      </form>
      {(user.firstname || user.lastname) && (
        <p>
          Welcome aboard, {user.firstname} {user.lastname}
        </p>
      )}
    </div>
  );
}

export default Form;
