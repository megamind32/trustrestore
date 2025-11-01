export function WalletFeatures() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Your one-stop, Web3 wallet</h3>
            <p className="text-muted-foreground mb-8">
              Buy, sell, and swap crypto, earn rewards, manage NFTs, and discover DApps, all in one place.
            </p>

            <div className="flex gap-2 mb-8">
              <button className="px-6 py-2 bg-primary text-white rounded-full font-medium">Mobile</button>
              <button className="px-6 py-2 bg-white border-2 border-primary text-primary rounded-full font-medium">
                Extension
              </button>
            </div>

            <button className="w-full px-6 py-3 bg-primary text-white rounded-full font-bold hover:opacity-90 transition">
              Download Mobile App
            </button>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 flex items-center justify-center">
            <img src="/mobile-phone-crypto-wallet-dark-theme.jpg" alt="Mobile App" className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  )
}
