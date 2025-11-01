export function SecurityFeatures() {
  return (
    <section className="px-6 py-20 bg-gradient-to-b from-emerald-200 to-lime-300">
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
    </section>
  )
}
