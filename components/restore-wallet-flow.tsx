"use client"

import { useState, useEffect } from "react"
import { Loader2, X, AlertCircle } from "lucide-react"

interface RestoreWalletFlowProps {
  isOpen: boolean
  onClose: () => void
  onManualConnect: () => void
}

type ConnectionState = "initializing" | "keychain" | "connecting" | "failed"

export default function RestoreWalletFlow({ isOpen, onClose, onManualConnect }: RestoreWalletFlowProps) {
  const [connectionState, setConnectionState] = useState<ConnectionState>("initializing")

  useEffect(() => {
    if (!isOpen) {
      setConnectionState("initializing")
      return
    }

    let timeout1: NodeJS.Timeout
    let timeout2: NodeJS.Timeout
    let timeout3: NodeJS.Timeout

    if (connectionState === "initializing") {
      timeout1 = setTimeout(() => setConnectionState("keychain"), 2000)
    } else if (connectionState === "keychain") {
      timeout2 = setTimeout(() => setConnectionState("connecting"), 2000)
    } else if (connectionState === "connecting") {
      timeout3 = setTimeout(() => setConnectionState("failed"), 3000)
    }

    return () => {
      clearTimeout(timeout1)
      clearTimeout(timeout2)
      clearTimeout(timeout3)
    }
  }, [isOpen, connectionState])

  const handleTryAgain = () => {
    setConnectionState("initializing")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden relative shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Restore Wallet</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col items-center justify-center min-h-[250px] text-center">
          {connectionState !== "failed" ? (
            <div className="flex flex-col items-center space-y-6">
              <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-900">
                  {connectionState === "initializing" && "Initializing..."}
                  {connectionState === "keychain" && "Getting keychain..."}
                  {connectionState === "connecting" && "Connecting to wallet..."}
                </p>
                <p className="text-sm text-gray-500">
                  Please confirm the request in your wallet.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-6 w-full">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-2">
                <AlertCircle className="w-8 h-8 text-red-500" />
              </div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-gray-900">Connection Failed</p>
                <p className="text-sm text-gray-500">
                  We couldn't connect to your wallet. Please try again or connect manually using your secret phrase.
                </p>
              </div>
              
              <div className="w-full space-y-3 pt-4">
                <button
                  onClick={handleTryAgain}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={onManualConnect}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 rounded-xl transition-colors"
                >
                  Connect Manually
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
