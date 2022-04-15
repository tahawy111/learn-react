import React, { useRef, useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const refInput = useRef();
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  }, [user]);

  return (
    <div>
      <h1 className="text-secondary">
        Hooks
        <strong className="text-danger">
          [ <span className="text-primary">useRef</span> ]
        </strong>
      </h1>
      <input
        ref={refInput}
        type="text"
        onChange={(e) => setUser(e.target.value)}
      />
      {user}
      <br />
      {count.current}
    </div>
  );
};

export default App;
