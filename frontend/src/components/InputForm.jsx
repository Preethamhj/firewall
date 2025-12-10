import React, { useState } from "react";
import { encryptData } from "../utils/crypto";
import { sendEncryptedRequest } from "../services/api";

const InputForm = ({ setOutput, setTrigger }) => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const encrypted = encryptData({ name, msg });
    const res = await sendEncryptedRequest(encrypted);

    setOutput(res.payload || null);
    setTrigger(Math.random());
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white/6 backdrop-blur-sm border border-purple-300/20 p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-semibold text-white mb-4 text-center">🔐 Secure Message Sender</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="p-3 rounded-lg border border-purple-300/40 bg-white/5 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="p-3 rounded-lg border border-purple-300/40 bg-white/5 text-white placeholder-purple-200 focus:ring-2 focus:ring-purple-400 outline-none"
          placeholder="Enter your message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button
          type="submit"
          className="mt-4 p-3 bg-gradient-to-br from-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-indigo-600 transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Securely"}
        </button>
      </form>
    </div>
  );
};

export default InputForm;
