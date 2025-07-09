"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Target } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const donationNeeds = [
  {
    id: 1,
    type: "person",
    name: "Nalwanja Beatrice",
    age: 13,
    location: "Kampala District",
    need: "School Fees & Supplies",
    story:
      "Nalwanja is a young girl who needs to continue her education. Her family cannot afford the fees and needs community support. She is passionate about learning and dreams of becoming a teacher to help others in her community. Your support will help her stay in school and achieve her dreams.",
    amountNeeded: 5000, // UGX
    amountRaised: 2500,
    image: "/images/don5.jpeg",
    urgency: "High",
    category: "Education",
  },
  {
    id: 2,
    type: "person",
    name: "Nakawunde Blessing",
    age: 15,
    location: "Jinja District",
    need: "School Fees",
    story:
      "Nakawunde is a young girl who needs to continue her education. Her family cannot afford the fees and needs community support. She excels in science and hopes to become a doctor to serve her village. Your donation will help her continue her studies and inspire others.",
    amountNeeded: 2000, // UGX
    amountRaised: 1000,
    image: "/images/don2.jpeg",
    urgency: "Urgent",
    category: "Education",
  },
  {
    id: 3,
    type: "person",
    name: "Benson Nsubuga",
    age: 5,
    location: "Kampala District",
    need: "School Fees",
    story:
      "Benson is a young child who needs to continue her education. Her family cannot afford the fees and needs community support. Benson loves drawing and playing football. Your help will ensure he gets the education and care he deserves.",
    amountNeeded: 2000, // UGX
    amountRaised: 1000,
    image: "/images/don3.jpeg",
    urgency: "High",
    category: "Education",
  },
  {
    id: 4,
    type: "video",
    title: "Our Impact in Uganda",
    description: "Watch how your donations are changing lives across Uganda.",
    video: "/images/video1.mp4",
    image: "/images/video-thumb.jpg", // optional thumbnail
    amountNeeded: 8000, // UGX
    amountRaised: 4000,
  },
  {
    id: 5,
    type: "person",
    title: "Car Donation",
    name: "Toyota Hiace",
    need: "Support our community",
    description: "Help us buy a car to support our community.",
    image: "/images/car.jpeg",
    story: "We need to buy a car to support our community.",
    amountNeeded: 20000, // UGX
    amountRaised: 0,
  },
  {
    id: 6,
    type: "video",
    title: "Building House",
    name: "Benson Nsubuga",
    need: "Need to build a house for my family",
    description: "Help us build a house for his family.",
    image: "/images/20.jpeg",
    video: "/images/video2.mp4",
    story: "We need to build a house for his family.",
    amountNeeded: 5000, // UGX
    amountRaised: 2500,
  },
];

const calculateProgress = (raised: number, needed: number) => {
  return Math.round((raised / needed) * 100);
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
};

interface DetailPageProps {
  params: { id: string };
}

export default function DonationNeedDetailPage({ params }: DetailPageProps) {
  const id = Number(params.id);
  const need = donationNeeds.find((n) => n.id === id);
  const otherNeeds = donationNeeds.filter((n) => n.id !== id);

  // State for donation amount and currency
  const [donationAmount, setDonationAmount] = useState(20);
  const [currency, setCurrency] = useState<"USD" | "EUR">("USD");
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonationClick = () => {
    setShowDonationForm(true);
  };

  const handleDonationSuccess = (details: any) => {
    console.log("Transaction completed by " + details.payer.name.given_name);
    toast.success(
      "Thank you for your donation! Your support makes a difference."
    );
    setShowDonationForm(false);
  };

  if (!need) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f4f4]">
        <h1 className="text-2xl font-bold text-[#8c3420] mb-4">
          Donation Need Not Found
        </h1>
        <Link href="/donation-needs">
          <Button variant="outline" className="border-[#8c3420] text-[#8c3420]">
            &larr; Back to All Needs
          </Button>
        </Link>
      </div>
    );
  }

  if (need.type === "video") {
    return (
      <div className="min-h-screen bg-[#f4f4f4] py-12">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold text-[#8c3420]">
              {need.title || "Video"}
            </h1>
            <Link href="/donation-needs">
              <Button
                variant="outline"
                className="border-[#8c3420] text-[#8c3420]"
              >
                &larr; Back to All Needs
              </Button>
            </Link>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Video or Thumbnail */}
            <div className="lg:w-1/2 w-full flex-shrink-0 flex flex-col gap-4">
              {need.video ? (
                <div className="w-full aspect-video bg-[#f4f4f4] rounded-lg overflow-hidden">
                  <iframe
                    src={need.video || ""}
                    title={need.title || "Video"}
                    className="w-full h-full min-h-[300px]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : need.image ? (
                <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={need.image || "/placeholder.svg"}
                    alt={need.title || need.name || "Video"}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
            {/* Right: Details */}
            <div className="lg:w-1/2 w-full flex flex-col gap-4">
              <h2 className="text-2xl font-bold text-[#8c3420] mb-2">
                {need.title || "Video"}
              </h2>
              <p className="text-gray-700 mb-4 whitespace-pre-line">
                {need.description}
              </p>
              {/* Donation section for video */}
              {typeof need.amountNeeded === "number" &&
                typeof need.amountRaised === "number" && (
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>
                        Raised: {formatCurrency(need.amountRaised ?? 0)}
                      </span>
                      <span>
                        Goal: {formatCurrency(need.amountNeeded ?? 0)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-[#8c3420] h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${calculateProgress(
                            need.amountRaised ?? 0,
                            need.amountNeeded ?? 1
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-700 font-semibold mb-2">
                      {calculateProgress(
                        need.amountRaised ?? 0,
                        need.amountNeeded ?? 1
                      )}
                      % funded
                    </div>
                    <Button
                      onClick={handleDonationClick}
                      className="bg-[#8c3420] hover:bg-[#6a2718] text-white w-full flex items-center justify-center text-lg py-6 mt-2"
                    >
                      <Target className="h-5 w-5 mr-2" /> Donate Now
                    </Button>
                  </div>
                )}
              <div className="mt-8 bg-[#f8f4e3] rounded-lg p-4 shadow-inner">
                <h3 className="text-lg font-bold text-[#8c3420] mb-2">
                  Why Your Support Matters
                </h3>
                <p className="text-gray-700">
                  Your support helps us reach more people and create lasting
                  change. Every view, share, and donation makes a difference!
                </p>
              </div>
            </div>
          </div>
          {/* Other Needs Section */}
          {otherNeeds.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-[#8c3420] mb-4">
                Other People & Videos Who Need Help
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                {otherNeeds.map((n) => (
                  <Link
                    key={n.id}
                    href={`/donation-needs/${n.id}`}
                    className="flex items-center gap-4 bg-white rounded-lg shadow p-4 hover:ring-2 hover:ring-[#8c3420] transition"
                  >
                    {n.type === "person" ? (
                      <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={n.image || "/placeholder.svg"}
                          alt={n.name || "Person"}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0 bg-[#F4F4F4] flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-white opacity-80"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#8c3420]">
                          {n.type === "person" ? n.name : n.title || "Video"}
                        </span>
                        {n.type === "person" && (
                          <span className="text-xs text-gray-600">
                            ({n.age})
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        {n.type === "person" ? n.need : n.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#8c3420]">
            Donation Need Details
          </h1>
          <Link href="/donation-needs">
            <Button
              variant="outline"
              className="border-[#8c3420] text-[#8c3420]"
            >
              &larr; Back to All Needs
            </Button>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Video or Image */}
          <div className="lg:w-1/2 w-full flex-shrink-0 flex flex-col gap-4">
            {need.video && need.video.endsWith(".mp4") ? (
              <video
                className="w-full h-64 rounded-lg object-cover shadow-lg"
                controls
              >
                <source src={need.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : need.video ? (
              <div className="w-full h-64 rounded-lg overflow-hidden bg-[#F4F4F4] flex items-center justify-center shadow-lg">
                <iframe
                  src={need.video}
                  title="Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}
            {/* Image as fallback or below video */}
            <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={need.image}
                alt={`${need.name} - ${need.need}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                    need.urgency === "Urgent"
                      ? "bg-red-100 text-red-800"
                      : need.urgency === "High"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {need.urgency}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-[#8c3420] text-white">
                  {need.category}
                </span>
              </div>
            </div>
          </div>
          {/* Right: Details */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              <h2 className="text-2xl font-bold text-[#8c3420]">
                {need.name}, {need.age}
              </h2>
              <span className="text-sm text-gray-600">📍 {need.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-800">
                Need:
              </span>
              <span className="text-base text-[#8c3420] font-bold">
                {need.need}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-gray-800">
                Category:
              </span>
              <span className="text-base text-[#8c3420]">{need.category}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#8c3420] mb-1">
                Story
              </h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {need.story}
              </p>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Raised: {formatCurrency(need.amountRaised)}</span>
                <span>Goal: {formatCurrency(need.amountNeeded)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div
                  className="bg-[#8c3420] h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${calculateProgress(
                      need.amountRaised,
                      need.amountNeeded
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="text-xs text-gray-700 font-semibold mb-2">
                {calculateProgress(need.amountRaised, need.amountNeeded)}%
                funded
              </div>
              {!showDonationForm ? (
                <Button
                  onClick={handleDonationClick}
                  className="bg-[#8c3420] hover:bg-[#6a2718] text-white w-full flex items-center mb-5 justify-center text-lg py-6 mt-2"
                >
                  <Target className="h-5 w-5 mr-2" /> Donate Now
                </Button>
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-6 mb-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#8c3420]">
                      Make a Donation
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDonationForm(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </Button>
                  </div>

                  {/* Currency Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Currency
                    </label>
                    <div className="flex gap-2">
                      <Button
                        variant={currency === "USD" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrency("USD")}
                        className={
                          currency === "USD"
                            ? "bg-[#8c3420] hover:bg-[#6a2718]"
                            : ""
                        }
                      >
                        USD ($)
                      </Button>
                      <Button
                        variant={currency === "EUR" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrency("EUR")}
                        className={
                          currency === "EUR"
                            ? "bg-[#8c3420] hover:bg-[#6a2718]"
                            : ""
                        }
                      >
                        EUR (€)
                      </Button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Amount ({currency === "USD" ? "$" : "€"})
                    </label>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      {[20, 50, 100, 200, 500, 1000].map((amount) => (
                        <Button
                          key={amount}
                          variant={
                            donationAmount === amount ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => setDonationAmount(amount)}
                          className={
                            donationAmount === amount
                              ? "bg-[#8c3420] hover:bg-[#6a2718]"
                              : ""
                          }
                        >
                          {currency === "USD" ? "$" : "€"}
                          {amount}
                        </Button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="20"
                        step="1"
                        value={donationAmount}
                        onChange={(e) =>
                          setDonationAmount(Number(e.target.value))
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c3420] focus:border-transparent"
                        placeholder="Custom amount"
                      />
                      <span className="flex items-center px-3 text-gray-500">
                        {currency === "USD" ? "USD" : "EUR"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Minimum donation: {currency === "USD" ? "$" : "€"}20
                    </p>
                  </div>

                  {/* PayPal Integration */}
                  <div className="mt-6">
                    <PayPalScriptProvider
                      options={{
                        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                        currency: currency,
                      }}
                    >
                      <PayPalButtons
                        style={{ layout: "vertical", shape: "rect" }}
                        createOrder={(data, actions) => {
                          if (!actions.order) {
                            throw new Error(
                              "PayPal actions.order is not available"
                            );
                          }
                          return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                              {
                                amount: {
                                  value: donationAmount.toString(),
                                  currency_code: currency,
                                },
                                description: `Donation for ${need.name} - ${need.need}`,
                              },
                            ],
                          });
                        }}
                        onApprove={(data, actions) => {
                          if (!actions.order) {
                            throw new Error(
                              "PayPal actions.order is not available"
                            );
                          }
                          return actions.order.capture().then((details) => {
                            handleDonationSuccess(details);
                          });
                        }}
                        onError={(err) => {
                          console.error("PayPal error:", err);
                          toast.error("Payment failed. Please try again.");
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-8 bg-[#f8f4e3] rounded-lg p-4 shadow-inner">
              <h3 className="text-lg font-bold text-[#8c3420] mb-2">
                Why Your Help Matters
              </h3>
              <p className="text-gray-700">
                Your support can change the course of {need.name}'s life. Every
                contribution, no matter the size, brings hope and opportunity.
                Join us in making a lasting impact!
              </p>
            </div>
          </div>
        </div>
        {/* Other Needs Section */}
        {otherNeeds.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#8c3420] mb-4">
              Other People Who Need Help
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {otherNeeds.map((n) => (
                <Link
                  key={n.id}
                  href={`/donation-needs/${n.id}`}
                  className="flex items-center gap-4 bg-white rounded-lg shadow p-4 hover:ring-2 hover:ring-[#8c3420] transition"
                >
                  <div className="relative h-16 w-16 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={n.image || "/placeholder.svg"}
                      alt={n.name || "Person"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#8c3420]">{n.name}</span>
                      <span className="text-xs text-gray-600">({n.age})</span>
                    </div>
                    <div className="text-xs text-gray-500">{n.need}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
