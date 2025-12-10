import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ResponseBox from "./components/ResponseBox";

const App = () => {
  const [output, setOutput] = useState(null);
  const [trigger, setTrigger] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 p-6">
      <div className="max-w-5xl mx-auto">
        <InputForm setOutput={setOutput} setTrigger={setTrigger} />
        <ResponseBox encrypted={output} />
      </div>
    </div>
  );
};

export default App;
