export function Footer() {
  return (
    <footer className="bg-white border-t border-border px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          <div>
            <img
            src="/trust.svg"
            alt="Support illustration"
            className="w-28 h-auto object-cover rounded-3xl"
          />
          </div>

          <div>
            <h4 className="font-bold mb-4">Wallet</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Mobile App
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Browser
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Extension
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Features</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Buy Crypto
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Swaps
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Staking
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  NFTs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Build</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Developer Docs
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Wallet Core
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Submit dApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Trust. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center hover:opacity-75"
            >
              f
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center hover:opacity-75"
            >
              𝕏
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-foreground text-white rounded-full flex items-center justify-center hover:opacity-75"
            >
              📷
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
