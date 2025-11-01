export function DappBrowser() {
  return (
    <section className="px-6 relative">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-primary to-blue-700 px-4 md:px-20 py-12 md:py-20 rounded-[20px] md:rounded-[48px] relative z-20">
        <h2 className="text-xl md:text-5xl font-bold text-white text-center mb-4">One Platform, Millions of Assets</h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto">
          As a leading self-custody multi-chain platform, we support millions of assets across 100+ blockchains. From
          Bitcoin, Ethereum, and Solana, to Cosmos, Optimism, and much more.
        </p>
        <input
          type="text"
          placeholder="Search a chain..."
          className="w-full px-6 py-3 bg-slate-50 rounded-full border-2 border-transparent focus:border-primary focus:outline-none mb-6"
        />

        <div className="bg-white rounded-2xl p-8 mb-12">

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 font-bold">Chain</th>
                  <th className="text-center py-3 px-4 font-bold">Buy</th>
                  <th className="text-center py-3 px-4 font-bold">Sell</th>
                  <th className="text-center py-3 px-4 font-bold">Swap</th>
                  <th className="text-center py-3 px-4 font-bold">Earn</th>
                  <th className="text-center py-3 px-4 font-bold">dApps</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "BNB Smart Chain", icon: "/bnb.avif" },
                  { name: "Solana", icon: "/sol.avif" },
                  { name: "Sui", icon: "/sui.avif" },
                  { name: "Ethereum", icon: "/eth.avif" },
                ].map((chain) => (
                  <tr key={chain.name} className="border-b">
                    <td className="py-4 px-4 flex items-center gap-2">
                      <img
                        src={chain.icon}
                        alt={chain.name}
                        className="w-6 md:w-12 h-6 md:h-12 object-contain rounded-4xl"
                      />
                      <span className="font-medium">{chain.name}</span>
                    </td>

                    {[1, 2, 3, 4, 5].map((i) => (
                      <td key={i} className="text-center py-4 px-4">
                        <img
                          src="/check.svg"
                          alt="Support illustration"
                          className="w-5 ml-10 h-auto object-cover rounded-3xl"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-1">10M+</div>
            <div className="text-blue-100">Assets</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-1">600M+</div>
            <div className="text-blue-100">NFTs</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold mb-1">100+</div>
            <div className="text-blue-100">Blockchains</div>
          </div>
        </div>
      </div>

      
    </section>
  )
}
