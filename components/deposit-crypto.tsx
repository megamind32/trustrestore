export function DepositCrypto() {
  return (
    <section className="px-6">
      {/* First div */}
      <div className="max-w-7xl mx-auto bg-gradient-to-b from-pink-100 to-pink-200 px-4 md:px-20 py-12 md:py-20 rounded-[20px] md:rounded-[48px] -mt-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-4 pt-8">Browse a world of dApps</h2>
        <p className="text-center text-black mb-12 max-w-2xl mx-auto">
          Access Web3 and DeFi opportunities via our dApp browser.
        </p>
        <div className="bg-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-xl md:text-4xl font-bold mb-4">Deposit crypto easily from exchanges</h3>
            <p className="text-[14px] md:text-lg text-foreground mb-6">
              Take control of your crypto. Avoid complicated steps and deposit directly to your wallet from exchanges
              like Binance and Coinbase.
            </p>
            <button className="px-6 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition text-[12px] md:text-[20px]">
              Get started with deposits
            </button>
          </div>

          <div className="flex-1 flex justify-center">
            <img src="/hand-holding-phone-qr-code-deposit.jpg" alt="Deposit Crypto" className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  )
}