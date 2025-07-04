import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Clock, Target } from "lucide-react";

const donationNeeds = [
  {
    id: 1,
    name: "Nalwanja Beatrice",
    age: 13,
    location: "Kampala District",
    need: "School Fees & Supplies",
    story:
      "Nalwanja is a young girl who needs to continue her education. Her family cannot afford the fees and needs community support. She is passionate about learning and dreams of becoming a teacher to help others in her community. Your support will help her stay in school and achieve her dreams.",
    amountNeeded: 500000, // UGX
    amountRaised: 150000,
    image: "/images/don5.jpeg",
    urgency: "High",
    category: "Education",
  },
  {
    id: 2,
    name: "Nakawunde Blessing",
    age: 15,
    location: "Jinja District",
    need: "School Fees",
    story:
      "Nakawunde is a young girl who needs to continue her education. Her family cannot afford the fees and needs community support. She excels in science and hopes to become a doctor to serve her village. Your donation will help her continue her studies and inspire others.",
    amountNeeded: 2000000, // UGX
    amountRaised: 450000,
    image: "/images/don2.jpeg",
    urgency: "Urgent",
    category: "Education",
  },
  {
    id: 3,
    name: "Benson Nsubuga",
    age: 5,
    location: "Kampala District",
    need: "School Fees",
    story:
      "Benson is a young child who needs to continue her education. Her family cannot afford the fees and needs community support. Benson loves drawing and playing football. Your help will ensure he gets the education and care he deserves.",
    amountNeeded: 800000, // UGX
    amountRaised: 200000,
    image: "/images/don3.jpeg",
    urgency: "High",
    category: "Education",
  },
];

const calculateProgress = (raised: number, needed: number) => {
  return Math.round((raised / needed) * 100);
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-UG", {
    style: "currency",
    currency: "UGX",
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
          {/* Left: Image */}
          <div className="lg:w-1/2 w-full flex-shrink-0">
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
              <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white w-full flex items-center justify-center text-lg py-6 mt-2">
                <Target className="h-5 w-5 mr-2" /> Donate Now
              </Button>
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
                      src={n.image}
                      alt={n.name}
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
