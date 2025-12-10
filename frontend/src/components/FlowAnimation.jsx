import { motion } from "framer-motion";

const FlowAnimation = ({ trigger }) => {
  return (
    <div className="mt-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6 text-purple-100">Network Data Flow</h2>

      <div className="flex items-center gap-6">
        {/* Client Box */}
        <div className="w-36 h-20 flex flex-col items-center justify-center
                        bg-white/8 backdrop-blur-sm rounded-xl border border-purple-300/20 shadow-lg">
          <span className="text-sm text-purple-100 font-medium">Client</span>
        </div>

        {/* Animated Packet to Firewall */}
        <motion.div
          key={trigger + "p1"}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 60, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="p-2 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 shadow-lg text-white">
            🔐
          </div>
        </motion.div>

        {/* Firewall Box */}
        <div className="w-40 h-20 flex items-center justify-center
                        bg-gradient-to-br from-purple-600/20 to-indigo-600/10 rounded-xl border border-purple-300/30 shadow-md">
          <span className="text-sm text-purple-50 font-medium">Firewall 🛡️</span>
        </div>

        {/* Animated Packet to Server */}
        <motion.div
          key={trigger + "p2"}
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 60, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="p-2 rounded-full bg-gradient-to-br from-indigo-300 to-purple-300 shadow-lg text-white">
            ➡️
          </div>
        </motion.div>

        {/* Server Box */}
        <div className="w-36 h-20 flex flex-col items-center justify-center
                        bg-white/6 backdrop-blur-sm rounded-xl border border-indigo-200/20 shadow-lg">
          <span className="text-sm text-indigo-100 font-medium">Server ⚙️</span>
        </div>
      </div>

      {/* small legend */}
      <p className="text-sm text-purple-100/80 mt-4">Client → Firewall → Server (animated packets show encryption & forwarding)</p>
    </div>
  );
};

export default FlowAnimation;
