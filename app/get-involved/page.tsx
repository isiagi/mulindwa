import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, HandHeart, Users, Gift } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import DonationForm from "@/components/donation-form"
import { imagePaths } from "@/app/utils/image-paths"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function GetInvolvedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePaths.heroGetInvolved || "/placeholder.svg"}
            alt="Get Involved"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={800}>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Get Involved
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in our mission to empower vulnerable individuals in Uganda. There are many ways to make a
                  difference.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  Ways to Help
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Every contribution makes a difference in the lives of those we serve.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <AnimateOnScroll variant="fade-up" duration={700} delay={100}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Donate</h3>
                <p className="text-center text-gray-500">Support our programs with a one-time or recurring donation.</p>
                <Link href="#donate" className="mt-2">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Donate Now</Button>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={200}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <HandHeart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Volunteer</h3>
                <p className="text-center text-gray-500">Share your time and skills to support our mission.</p>
                <Link href="#volunteer" className="mt-2">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Volunteer</Button>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={300}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Partner</h3>
                <p className="text-center text-gray-500">Collaborate with us as an organization or business.</p>
                <Link href="#partner" className="mt-2">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Partner With Us</Button>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={400}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#f4f4f4] p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Fundraise</h3>
                <p className="text-center text-gray-500">Start your own fundraising campaign to support our work.</p>
                <Link href="#fundraise" className="mt-2">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Start Fundraising</Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimateOnScroll variant="fade-right" duration={800}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">Make a Donation</h2>
                  <p className="text-gray-700 md:text-lg">
                    Your donation helps us continue our mission to empower vulnerable individuals in Uganda. Every
                    contribution, no matter the size, makes a difference.
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <Tabs defaultValue="one-time" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="one-time">One-Time Donation</TabsTrigger>
                      <TabsTrigger value="monthly">Monthly Giving</TabsTrigger>
                    </TabsList>
                    <TabsContent value="one-time">
                      <DonationForm type="one-time" />
                    </TabsContent>
                    <TabsContent value="monthly">
                      <DonationForm type="monthly" />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" duration={800} delay={200}>
              <div className="flex items-center justify-center">
                <div className="space-y-6">
                  <Image
                    src={imagePaths.donationImpact || "/placeholder.svg"}
                    alt="Donation impact"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-xl"
                  />
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <h3 className="text-xl font-bold text-[#8c3420] mb-4">Your Donation Makes a Difference</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>$25 provides school supplies for a child for a term</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>$50 supports healthcare for a family for a month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>$100 funds vocational training for a youth</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>$250 helps build a water well for a community</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimateOnScroll
              variant="fade-right"
              duration={800}
              className="flex items-center justify-center order-2 lg:order-1"
            >
              <Image
                src={imagePaths.volunteersInAction || "/placeholder.svg"}
                alt="Volunteers in action"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </AnimateOnScroll>
            <AnimateOnScroll
              variant="fade-left"
              duration={800}
              delay={200}
              className="flex flex-col justify-center space-y-4 order-1 lg:order-2"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">Volunteer With Us</h2>
                <p className="text-gray-700 md:text-lg">
                  Share your time, skills, and passion to make a difference in the lives of vulnerable individuals in
                  Uganda. We offer various volunteer opportunities both locally and internationally.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg border bg-[#f4f4f4] p-4 shadow-sm">
                  <h3 className="text-lg font-bold text-[#8c3420]">Local Volunteers</h3>
                  <p className="mt-2 text-gray-700">
                    Join us in Uganda to support our programs and services directly in the communities we serve.
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#8c3420] font-bold">•</span>
                      <span>Teaching and tutoring</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#8c3420] font-bold">•</span>
                      <span>Healthcare support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#8c3420] font-bold">•</span>
                      <span>Administrative assistance</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border bg-[#f4f4f4] p-4 shadow-sm">
                  <h3 className="text-lg font-bold text-[#8c3420]">International Volunteers</h3>
                  <p className="mt-2 text-gray-700">
                    Support our work from anywhere in the world through virtual volunteering opportunities.
                  </p>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#8c3420] font-bold">•</span>
                      <span>Grant writing and fundraising</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#8c3420] font-bold">•</span>
                      <span>Social media and marketing</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#8c3420] font-bold">•</span>
                      <span>Graphic design and content creation</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Apply to Volunteer</Button>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Partner */}
      <section id="partner" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  Partner With Us
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join forces with Mulindwa Charity Foundation to create lasting impact in Uganda.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <AnimateOnScroll variant="fade-up" duration={700} delay={100}>
              <div className="flex flex-col space-y-3 rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#8c3420]">Corporate Partnerships</h3>
                <p className="flex-1 text-gray-700">
                  Partner with us as a business to support our programs through financial contributions, in-kind
                  donations, or employee volunteer programs.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#8c3420] hover:bg-[#6a2718] text-white">Learn More</Button>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={200}>
              <div className="flex flex-col space-y-3 rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#8c3420]">NGO Partnerships</h3>
                <p className="flex-1 text-gray-700">
                  Collaborate with us as a non-profit organization to implement joint programs, share resources, and
                  maximize our collective impact.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#8c3420] hover:bg-[#6a2718] text-white">Learn More</Button>
                </Link>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={300}>
              <div className="flex flex-col space-y-3 rounded-lg bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#8c3420]">Academic Partnerships</h3>
                <p className="flex-1 text-gray-700">
                  Partner with us as an educational institution for research, internships, and service-learning
                  opportunities for students.
                </p>
                <Link href="/contact">
                  <Button className="w-full bg-[#8c3420] hover:bg-[#6a2718] text-white">Learn More</Button>
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Fundraise */}
      <section id="fundraise" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <AnimateOnScroll variant="fade-right" duration={800}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">Start Fundraising</h2>
                  <p className="text-gray-700 md:text-lg">
                    Create your own fundraising campaign to support our work. Whether it's a birthday, marathon, or
                    special event, you can turn it into an opportunity to make a difference.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="rounded-lg border bg-[#f4f4f4] p-4 shadow-sm">
                    <h3 className="text-lg font-bold text-[#8c3420]">Fundraising Ideas</h3>
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>Birthday or anniversary fundraiser</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>Run, walk, or cycle for a cause</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>Bake sale or craft fair</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#8c3420] font-bold">•</span>
                        <span>School or community event</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Start Your Campaign</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" duration={800} delay={200}>
              <div className="flex items-center justify-center">
                <Image
                  src={imagePaths.fundraisingCampaign || "/placeholder.svg"}
                  alt="Fundraising campaign"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8c3420] text-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Make a Difference?
                </h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join us in our mission to empower vulnerable individuals in Uganda. Every contribution, no matter how
                  small, makes a difference.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#donate">
                  <Button className="bg-white text-[#8c3420] hover:bg-gray-100">Donate Now</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
