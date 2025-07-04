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
      "Nalwanja is a young girl who needs to continue her education. Her family cannot afford the fees and needs community support.",
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
      "Nakawunde is a young girl who needs to continue her education. Her family cannot afford the fees and needs community support.",
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
      "Benson is a young child who needs to continue her education. Her family cannot afford the fees and needs community support.",
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

export default function DonationNeedsPage() {
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-12">
      <div className="container px-4 md:px-6">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-[#8c3420]">
            All Donation Needs
          </h1>
          <Link href="/">
            <Button
              variant="outline"
              className="border-[#8c3420] text-[#8c3420]"
            >
              &larr; Back to Home
            </Button>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {donationNeeds.map((person) => (
            <Link
              key={person.id}
              href={`/donation-needs/${person.id}`}
              className="group"
            >
              <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group-hover:ring-2 group-hover:ring-[#8c3420] cursor-pointer">
                <div className="relative h-56 w-full">
                  <Image
                    src={person.image}
                    alt={`${person.name} - ${person.need}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                        person.urgency === "Urgent"
                          ? "bg-red-100 text-red-800"
                          : person.urgency === "High"
                          ? "bg-orange-100 text-orange-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      <Clock className="h-3 w-3 mr-1" />
                      {person.urgency}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-[#8c3420] text-white">
                      {person.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-bold text-[#8c3420] mb-1">
                    {person.name}, {person.age}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    📍 {person.location}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {person.need}
                  </p>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                    {person.story}
                  </p>
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Raised: {formatCurrency(person.amountRaised)}</span>
                      <span>Goal: {formatCurrency(person.amountNeeded)}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div
                        className="bg-[#8c3420] h-2.5 rounded-full"
                        style={{
                          width: `${calculateProgress(
                            person.amountRaised,
                            person.amountNeeded
                          )}%`,
                        }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-700 font-semibold">
                      {calculateProgress(
                        person.amountRaised,
                        person.amountNeeded
                      )}
                      % funded
                    </div>
                  </div>
                  <Button className="mt-2 bg-[#8c3420] hover:bg-[#6a2718] text-white w-full flex items-center justify-center">
                    <Target className="h-4 w-4 mr-2" /> Donate Now
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
