import { useState } from "react"
import ImportWalletPopup from "@/components/import-wallet-popup"

export function HeroSection() {
  const [isImportOpen, setIsImportOpen] = useState(false)

  const handleWalletImport = (walletName: string, secretPhrase: string) => {
    console.log("Wallet Name:", walletName)
    console.log("Secret Phrase:", secretPhrase)
  }
  return (
    <>
    <section className="pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 md:mt-4">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
              True crypto ownership.
              <br />
              Powerful Web3
              <br />
              experiences
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setIsImportOpen(true)} 
                className="px-6 py-2 md:py-3 rounded-full border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 transition">
                Restore Wallet
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src="/image.avif"
              alt="Trust Wallet 3D Devices"
              className="w-[1220px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-t border-gray-200">
          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Trusted by</div>
            <div className="text-3xl font-bold">
              <span className="text-blue-600">200M</span>
              <span className="text-gray-900"> people</span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Founded in</div>
            <div className="text-3xl font-bold text-gray-900">
              <span className="text-blue-600">2017</span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Independently</div>
            <div className="text-3xl font-bold">
              <span className="text-blue-600">Audited</span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">ISO</div>
            <div className="text-3xl font-bold">
              <span className="text-blue-600">Certified</span>
            </div>
          </div>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Top reviews</div>
            <div className="text-3xl font-bold">
              <span className="text-blue-600">★★★★★</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ImportWalletPopup
          isOpen={isImportOpen}
          onClose={() => setIsImportOpen(false)}
          onSubmit={handleWalletImport}
        />
        </>
  )
}
