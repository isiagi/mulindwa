import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  BookOpen,
  Droplets,
  Users,
  HandHeart,
  DollarSign,
  Clock,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { imagePaths } from "@/app/utils/image-paths";
import AnimateOnScroll from "@/components/animate-on-scroll";
import HeroSlider from "@/components/hero-slider";

export default function Home() {
  // Hero slider content
  const heroSlides = [
    {
      image: imagePaths.heroHome || "/placeholder.svg?height=800&width=1600",
      title: "MULINDWA CHARITY FOUNDATION",
      description:
        "Empowering vulnerable individuals through education, healthcare, and sustainable development initiatives in Uganda.",
    },
    {
      image:
        imagePaths.educationProgram || "/placeholder.svg?height=800&width=1600",
      title: "EDUCATION FOR ALL",
      description:
        "Supporting children's education and providing opportunities for a brighter future.",
    },
    {
      image:
        imagePaths.healthcareProgram ||
        "/placeholder.svg?height=800&width=1600",
      title: "HEALTHCARE INITIATIVES",
      description:
        "Providing essential healthcare services to underserved communities across Uganda.",
    },
    {
      image:
        imagePaths.skillsProgram || "/placeholder.svg?height=800&width=1600",
      title: "SKILLS DEVELOPMENT",
      description:
        "Empowering youth and women with vocational skills for sustainable livelihoods.",
    },
  ];

  // Sample donation needs data - you can replace this with data from your API/database
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

  // Function to calculate progress percentage
  const calculateProgress = (raised: any, needed: any) => {
    return Math.round((raised / needed) * 100);
  };

  // Function to format currency
  const formatCurrency = (amount: any) => {
    return new Intl.NumberFormat("en-UG", {
      style: "currency",
      currency: "UGX",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  Our Mission & Vision
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Working hand-in-hand with communities to build a stronger,
                  more resilient Uganda.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <AnimateOnScroll variant="fade-right" duration={700} delay={100}>
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-[#f8f4e3] p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8c3420]">
                    Our Vision
                  </h3>
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={imagePaths.visionImage || "/placeholder.svg"}
                    alt="Children with hope for the future"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700">
                  A Uganda where every individual has the opportunity to live
                  with dignity and purpose.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" duration={700} delay={200}>
              <div className="flex flex-col justify-center space-y-4 rounded-lg bg-[#f8f4e3] p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                    <HandHeart className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#8c3420]">
                    Our Mission
                  </h3>
                </div>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={imagePaths.missionImage || "/placeholder.svg"}
                    alt="Community empowerment activities"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700">
                  To empower vulnerable individuals through education,
                  healthcare, and sustainable development initiatives.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* People Who Need Help Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  People Who Need Your Help
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every donation makes a real difference in someone's life. Meet
                  some of the people waiting for your support.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="mx-auto grid max-w-6xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {donationNeeds.map((person, index) => (
              <AnimateOnScroll
                key={person.id}
                variant="fade-up"
                duration={700}
                delay={100 * (index + 1)}
              >
                <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Image and Urgency Badge */}
                  <div className="relative h-48 w-full">
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

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#8c3420] mb-2">
                        {person.name}, {person.age}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        📍 {person.location}
                      </p>
                      <p className="text-lg font-semibold text-gray-800 mb-3">
                        {person.need}
                      </p>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                        {person.story}
                      </p>
                    </div>

                    {/* Progress Section */}
                    <div className="mt-4 flex items-center">
                      <Link
                        href={`/donation-needs/${person.id}`}
                        className="flex-1"
                      >
                        <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white w-full flex items-center justify-center text-sm py-6 mt-2">
                          <Target className="h-5 w-5 mr-2" /> Donate Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll variant="fade-up" duration={700} delay={500}>
            <div className="flex justify-center mt-8">
              <Link href="/donation-needs">
                <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">
                  <Target className="h-4 w-4 mr-2" />
                  View All Donation Needs
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  Our Programs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Impacting thousands of lives across multiple districts in
                  Uganda.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <AnimateOnScroll variant="fade-up" duration={700} delay={100}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-4 shadow-lg">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#8c3420]">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">
                  Education Support
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Providing school fees, scholastic materials, and educational
                  opportunities for orphaned and vulnerable children.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={200}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-4 shadow-lg">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#8c3420]">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">
                  Skills Training
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Vocational and life skills training for youth and women to
                  create sustainable livelihoods.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={300}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-4 shadow-lg">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#8c3420]">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Healthcare</h3>
                <p className="text-center text-sm text-gray-500">
                  Basic healthcare support and mobile medical camps to promote
                  health in underserved communities.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={400}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-4 shadow-lg">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#8c3420]">
                  <Droplets className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">
                  WASH Initiatives
                </h3>
                <p className="text-center text-sm text-gray-500">
                  Water, Sanitation, and Hygiene initiatives to improve
                  community health and wellbeing.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="fade-up" duration={700} delay={500}>
            <div className="flex justify-center mt-8">
              <Link href="/programs">
                <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">
                  View All Programs
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8c3420] text-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Impact
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Building a stronger, more resilient Uganda where no one is
                  left behind.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <AnimateOnScroll variant="zoom-in" duration={700} delay={100}>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">1000+</span>
                <span className="text-center text-sm text-white/80">
                  Children Supported
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" duration={700} delay={200}>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">5+</span>
                <span className="text-center text-sm text-white/80">
                  Districts Served
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" duration={700} delay={300}>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">10+</span>
                <span className="text-center text-sm text-white/80">
                  Years of Service
                </span>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="zoom-in" duration={700} delay={400}>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-4xl font-bold">20+</span>
                <span className="text-center text-sm text-white/80">
                  Community Partners
                </span>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Featured Images */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  Our Work in Action
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the impact we're making in communities across Uganda.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <AnimateOnScroll variant="fade-up" duration={700} delay={100}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={imagePaths.educationProgram || "/placeholder.svg"}
                  alt="Education program"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="bg-white p-4">
                  <h3 className="text-lg font-bold text-[#8c3420]">
                    Education Support
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Providing quality education to vulnerable children.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={200}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={imagePaths.healthcareProgram || "/placeholder.svg"}
                  alt="Healthcare program"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="bg-white p-4">
                  <h3 className="text-lg font-bold text-[#8c3420]">
                    Healthcare Services
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Mobile medical camps serving remote communities.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={300}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={imagePaths.skillsProgram || "/placeholder.svg"}
                  alt="Skills training program"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="bg-white p-4">
                  <h3 className="text-lg font-bold text-[#8c3420]">
                    Skills Training
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Empowering youth and women with vocational skills.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
          <AnimateOnScroll variant="fade-up" duration={700} delay={400}>
            <div className="flex justify-center mt-4">
              <Link href="/gallery">
                <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">
                  View Gallery
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f4e3]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimateOnScroll variant="fade-right" duration={800}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">
                    Get Involved Today
                  </h2>
                  <p className="text-gray-700 md:text-lg">
                    Join us in our mission to empower vulnerable individuals in
                    Uganda. There are many ways to make a difference.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/get-involved">
                    <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">
                      Donate Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-[#8c3420] text-[#8c3420]"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" duration={800} delay={200}>
              <div className="flex items-center justify-center">
                <Image
                  src={imagePaths.volunteers || "/placeholder.svg"}
                  alt="Volunteers working with children"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
