import { useState } from "react"
import ImportWalletPopup from "@/components/import-wallet-popup"

export function Header() {
  const [isImportOpen, setIsImportOpen] = useState(false)

  const handleWalletImport = (walletName: string, secretPhrase: string) => {
    console.log("Wallet Name:", walletName)
    console.log("Secret Phrase:", secretPhrase)
  }

  return (
    <>
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="mx-auto px-4 md:px-14 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/trust.svg"
            alt="Support illustration"
            className="w-28 h-auto object-cover rounded-3xl"
          />
        </div>

        <div className="flex gap-12">
          {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
            Wallet
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
            Features
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
            Build
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
            Support
          </a>
          <a href="#" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
            About
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          <button className="px-4 py-2 rounded-full border-2 border-blue-600 text-blue-600 text-sm font-medium hover:bg-blue-50 transition flex items-center gap-2 hidden md:flex">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
            Language
          </button>

          <button 
            onClick={() => setIsImportOpen(true)}
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition text-[12px] md:text-[14px]">
            Restore Wallet
          </button>
        </div>
        </div>
      </div>
    </header>
    
    <ImportWalletPopup
      isOpen={isImportOpen}
      onClose={() => setIsImportOpen(false)}
      onSubmit={handleWalletImport}
    />
    </>
  )
}
