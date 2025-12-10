import React from "react";
import { decryptData } from "../utils/crypto";

const ResponseBox = ({ encrypted }) => {
  if (!encrypted) return null;

  const decrypted = decryptData(encrypted);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 rounded-xl bg-white/6 border border-indigo-200/20 shadow-lg">
      <h3 className="text-xl font-semibold mb-2 text-purple-100">🔒 Encrypted Response</h3>

      <div className="bg-white/8 p-3 rounded border border-purple-200/20 break-all text-sm text-purple-50 shadow-sm">
        {encrypted}
      </div>

      <h3 className="text-xl font-semibold mt-5 text-indigo-100">🔓 Decrypted Data</h3>

      <pre className="bg-white/7 p-4 rounded border border-indigo-200/20 shadow mt-3 text-sm text-indigo-50">
        {JSON.stringify(decrypted, null, 2)}
      </pre>
    </div>
  );
};

export default ResponseBox;
