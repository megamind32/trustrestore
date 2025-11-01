"use client"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PerpsPromo } from "@/components/perps-promo"
import { BuildingOnTrust } from "@/components/building-on-trust"
import { WalletFeatures } from "@/components/wallet-features"
import { DappBrowser } from "@/components/dapp-browser"
import { DepositCrypto } from "@/components/deposit-crypto"
import { ZeroTracking } from "@/components/zero-tracking"
// import { SecurityFeatures } from "@/components/security-features"
import { Community } from "@/components/community"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="space-y-0">
        <HeroSection />
        <PerpsPromo />
        <BuildingOnTrust />
        <DappBrowser />
        <DepositCrypto />
        <ZeroTracking />
        {/* <SecurityFeatures /> */}
        <WalletFeatures />
        <Community />
        <Footer />
      </div>
    </main>
  )
}
