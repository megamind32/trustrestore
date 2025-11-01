export function BuildingOnTrust() {
  return (
    <section className="px-6 py-14 ">
      <div className="max-w-7xl mx-auto bg-[#0500FF] px-4 md:px-20 py-12 md:py-20 rounded-[20px] md:rounded-[48px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-xl md:text-3xl font-bold text-white mb-6">Building on Trust</h2>
            <p className="text-[14px] md:text-lg text-blue-100 mb-8 leading-relaxed">
              We know that working together as a community is better for everyone. Our platform enables blockchain
              developers to build their dApps and wallets natively and connect with millions of users, without having to
              worry about the low-level implementation details.
            </p>
            <button className="px-6 py-3 bg-white text-primary font-bold rounded-full hover:opacity-90 transition">
              Check out our Developer Docs
            </button>
          </div>

          <div className="flex justify-center order-1 md:order-2">
            <img src="/raw.b373ab3f.svg" alt="Developer Platform" className="w-56 max-w-sm" />
          </div>
        </div>
      </div>
    </section>
  )
}
