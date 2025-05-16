import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Calendar, Award } from "lucide-react"
import { imagePaths } from "@/app/utils/image-paths"
import AnimateOnScroll from "@/components/animate-on-scroll"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePaths.heroAbout || "/placeholder.svg"}
            alt="About Mulindwa Charity Foundation"
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
                  About Mulindwa Charity Foundation
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn about our journey, mission, and the impact we're making in Uganda.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <AnimateOnScroll variant="fade-right" duration={700}>
              <div className="flex items-center justify-center">
                <Image
                  src={imagePaths.foundationStory || "/placeholder.svg"}
                  alt="Mulindwa Charity Foundation story"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-xl"
                />
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-left" duration={700} delay={200}>
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-[#f8f4e3] px-3 py-1 text-sm text-[#8c3420]">Our Story</div>
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">
                  From Humble Beginnings
                </h2>
                <p className="text-gray-700 md:text-lg">
                  In its early years, Mulindwa Charity Foundation focused primarily on providing school fees, scholastic
                  materials, and basic healthcare support to orphaned and vulnerable children in Kiboga district,
                  Uganda.
                </p>
                <p className="text-gray-700 md:text-lg">
                  As the organization matured, it expanded its programs to include vocational and life skills training
                  for youth and women, health promotion through mobile medical camps, Water, Sanitation, and Hygiene
                  (WASH) initiatives, and psychosocial support services.
                </p>
                <p className="text-gray-700 md:text-lg">
                  Today, Mulindwa Charity Foundation Uganda Limited operates across multiple districts, impacting the
                  lives of thousands. The Foundation continues to work hand-in-hand with communities, local leaders, and
                  national partners to build a stronger, more resilient Uganda where no one is left behind.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                  Our Core Values
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide our work and decision-making.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <AnimateOnScroll variant="fade-up" duration={700} delay={100}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Compassion</h3>
                <p className="text-center text-gray-500">
                  We approach our work with empathy and a genuine concern for the well-being of those we serve.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={200}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Community</h3>
                <p className="text-center text-gray-500">
                  We believe in the power of community-led development and collaborative partnerships.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={300}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Excellence</h3>
                <p className="text-center text-gray-500">
                  We strive for the highest standards in all our programs and services.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={400}>
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 shadow-lg">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8c3420]">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#8c3420]">Sustainability</h3>
                <p className="text-center text-gray-500">
                  We focus on long-term solutions that empower communities to thrive independently.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">Our Team</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated individuals behind Mulindwa Charity Foundation.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <AnimateOnScroll variant="fade-up" duration={700} delay={100}>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={imagePaths.teamMember1 || "/placeholder.svg"}
                    alt="Team member"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#8c3420]">John Mulindwa</h3>
                  <p className="text-sm text-gray-500">Founder & Executive Director</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={200}>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={imagePaths.teamMember2 || "/placeholder.svg"}
                    alt="Team member"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#8c3420]">Sarah Nakato</h3>
                  <p className="text-sm text-gray-500">Programs Director</p>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variant="fade-up" duration={700} delay={300}>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-40 w-40 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src={imagePaths.teamMember3 || "/placeholder.svg"}
                    alt="Team member"
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-[#8c3420]">David Mukasa</h3>
                  <p className="text-sm text-gray-500">Community Outreach Coordinator</p>
                </div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Mission</h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Together, we can make a difference in the lives of vulnerable individuals in Uganda.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/get-involved">
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
