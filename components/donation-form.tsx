"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Phone } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DonationFormProps {
  type: "one-time" | "monthly"
}

export default function DonationForm({ type }: DonationFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [isCustom, setIsCustom] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<"card" | "mobile">("card")

  // Card payment fields
  const [cardNumber, setCardNumber] = useState("")
  const [cardExpiry, setCardExpiry] = useState("")
  const [cardCvc, setCardCvc] = useState("")

  // Mobile money fields
  const [phoneNumber, setPhoneNumber] = useState("")
  const [mobileProvider, setMobileProvider] = useState("")

  const presetAmounts = type === "one-time" ? ["25", "50", "100", "250"] : ["10", "25", "50", "100"]

  const handleAmountSelect = (value: string) => {
    if (value === "custom") {
      setIsCustom(true)
      setSelectedAmount("custom")
    } else {
      setIsCustom(false)
      setSelectedAmount(value)
      setCustomAmount("")
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers and decimal point
    const value = e.target.value.replace(/[^0-9.]/g, "")
    setCustomAmount(value)
  }

  const formatCardNumber = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")
    // Format with spaces every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, "$1 ")
    // Limit to 19 characters (16 digits + 3 spaces)
    return formatted.slice(0, 19)
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value))
  }

  const formatCardExpiry = (value: string) => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "")
    // Format as MM/YY
    if (digits.length > 2) {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}`
    }
    return digits
  }

  const handleCardExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardExpiry(formatCardExpiry(e.target.value))
  }

  const handleCardCvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow up to 4 digits
    const value = e.target.value.replace(/\D/g, "").slice(0, 4)
    setCardCvc(value)
  }

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits and plus sign at the beginning
    const value = e.target.value.replace(/[^\d+]/g, "")
    setPhoneNumber(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Basic validation
    if (!name) {
      toast({
        title: "Please enter your name",
        variant: "destructive",
      })
      return
    }

    if (!email) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      })
      return
    }

    if (!selectedAmount || (isCustom && !customAmount)) {
      toast({
        title: "Please select or enter a donation amount",
        variant: "destructive",
      })
      return
    }

    // Payment method specific validation
    if (paymentMethod === "card") {
      if (!cardNumber || !cardExpiry || !cardCvc) {
        toast({
          title: "Please enter all card details",
          variant: "destructive",
        })
        return
      }
    } else if (paymentMethod === "mobile") {
      if (!phoneNumber) {
        toast({
          title: "Please enter your phone number",
          variant: "destructive",
        })
        return
      }
      if (!mobileProvider) {
        toast({
          title: "Please select a mobile money provider",
          variant: "destructive",
        })
        return
      }
    }

    const finalAmount = isCustom ? customAmount : selectedAmount

    // In a real application, this would connect to a payment processor
    toast({
      title: "Thank you for your donation!",
      description: `Your ${type} donation of $${finalAmount} via ${paymentMethod === "card" ? "card" : "mobile money"} has been processed.`,
    })

    // Reset form
    setSelectedAmount(null)
    setCustomAmount("")
    setIsCustom(false)
    setName("")
    setEmail("")
    setCardNumber("")
    setCardExpiry("")
    setCardCvc("")
    setPhoneNumber("")
    setMobileProvider("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <Label>Select Amount</Label>
          <RadioGroup value={selectedAmount || ""} onValueChange={handleAmountSelect}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {presetAmounts.map((amount) => (
                <div key={amount} className="flex items-center space-x-2">
                  <RadioGroupItem value={amount} id={`amount-${amount}`} />
                  <Label htmlFor={`amount-${amount}`} className="cursor-pointer">
                    ${amount}
                  </Label>
                </div>
              ))}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="custom" id="amount-custom" />
                <Label htmlFor="amount-custom" className="cursor-pointer">
                  Custom
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>

        {isCustom && (
          <div className="space-y-2">
            <Label htmlFor="custom-amount">Enter Custom Amount</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="custom-amount"
                className="pl-7"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                required={isCustom}
              />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label>Payment Method</Label>
          <Tabs defaultValue="card" onValueChange={(value) => setPaymentMethod(value as "card" | "mobile")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="card" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                <span>Card</span>
              </TabsTrigger>
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Mobile Money</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="card" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input
                  id="card-number"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  required={paymentMethod === "card"}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="card-expiry">Expiry Date</Label>
                  <Input
                    id="card-expiry"
                    placeholder="MM/YY"
                    value={cardExpiry}
                    onChange={handleCardExpiryChange}
                    required={paymentMethod === "card"}
                    maxLength={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-cvc">CVC</Label>
                  <Input
                    id="card-cvc"
                    placeholder="123"
                    value={cardCvc}
                    onChange={handleCardCvcChange}
                    required={paymentMethod === "card"}
                    maxLength={4}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="mobile-provider">Mobile Money Provider</Label>
                <Select value={mobileProvider} onValueChange={setMobileProvider} required={paymentMethod === "mobile"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                    <SelectItem value="airtel">Airtel Money</SelectItem>
                    <SelectItem value="africell">Africell Money</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input
                  id="phone-number"
                  placeholder="+256 70 000 0000"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required={paymentMethod === "mobile"}
                />
                <p className="text-xs text-gray-500">
                  Enter the phone number registered with your mobile money account
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Button type="submit" className="w-full bg-[#8c3420] hover:bg-[#6a2718] text-white">
        {type === "one-time" ? "Donate Now" : "Start Monthly Donation"}
      </Button>

      <div className="text-center text-xs text-gray-500">
        <p>Your donation is secure and encrypted. Thank you for your support!</p>
      </div>
    </form>
  )
}
