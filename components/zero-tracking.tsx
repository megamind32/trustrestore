export function ZeroTracking() {
  return (
    <section className="px-6 -mt-16">
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-lime-300 via-green-300 to-emerald-300 px-4 md:px-20 py-12 md:py-20 rounded-[20px] md:rounded-[48px]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pt-8">Zero personal tracking</h2>
        <p className="text-center text-foreground max-w-2xl mx-auto mb-12">
          We secure your wallet, but don't control or have access to your private keys or secret phrase - only you do.
        </p>

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-3xl font-bold mb-4">True ownership of your crypto assets</h3>
              <p className="text-foreground mb-6 text-[12px]">
                We secure your wallet, but don't control or have access to your private keys or secret phrase - only you
                do.
              </p>
              <button className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            <div className="flex justify-center">
              <img src="/3d-crypto-assets-wallet-colorful.jpg" alt="Crypto Assets" className="w-full max-w-xs" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Added security with encryption",
              description: "Use our Encrypted Cloud Backup for increased wallet security.",
              icon: "🔒",
            },
            {
              title: "Zero personal tracking",
              description: "We don't track any personal information, including your IP address or balances.",
              icon: "🛡️",
            },
            {
              title: "Proactive alerts for risky transactions",
              description: "Stay safe with alerts for risky address and dApp connections.",
              icon: "🔔",
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-2xl p-8">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 border-2 border-foreground text-foreground rounded-full font-bold hover:bg-foreground hover:text-white transition">
            Learn more about privacy & security
          </button>
        </div>
      </div>
      </div>
    </section>
  )
}
