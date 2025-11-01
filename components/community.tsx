export function Community() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Enjoy a Web3 experience powered by community</h2>
        <p className="text-lg text-muted-foreground mb-12">
          Join our vibrant and diverse community to learn about the power of self-custody, crypto, and Web3.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { name: "Juan", role: "DeFi Enthusiast", testimonial: "The easiest way to understand DeFi is to get your hands dirty. The Trust Wallet dApp Browser helped me to use protocols with small amounts and learn what works and what doesn't work", image: "/juan.avif" },
            { name: "Jen", role: "Security Advocate", testimonial: "Secure your private keys like your life depends on it. #DoNotShare 🔑", image: "/jen.avif" },
            { name: "Harry", role: "Blockchain Developer", testimonial: "As a newcomer in this field, the introduction of blockchain technology has had a profound and transformative impact on my life. It has opened up an entirely new realm of possibilities that I am eager to explore.", image: "/harry.avif" },
            { name: "Esmart", role: "NFT Creator", testimonial: "I thoroughly enjoy engaging with DeFi and have developed a passion for minting NFTs. However, I always make it a point to conduct my own research and consistently check the Trust Wallet Security Scanner prior to any acquisition. By following these Web3 security practices, I ensure my safety and stay #SAFU. 🛡️", image: "/esmart.avif" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-56 h-116 bg-slate-300 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <h3 className="font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
              <p className="text-sm">{member.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
