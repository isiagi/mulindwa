import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Users, Heart, Droplets } from "lucide-react"
import { imagePaths } from "@/app/utils/image-paths"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePaths.heroPrograms || "/placeholder.svg"}
            alt="Our Programs"
            fill
            className="object-cover brightness-[0.85]"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Our Programs
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover how we're making a difference in the lives of vulnerable individuals across Uganda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Support */}
      <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={imagePaths.educationSupport || "/placeholder.svg"}
                alt="Education support program"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-[#8c3420]" />
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">Education Support</h2>
              </div>
              <p className="text-gray-700 md:text-lg">
                Our education support program provides school fees, scholastic materials, and educational opportunities
                for orphaned and vulnerable children in Uganda. We believe that education is the key to breaking the
                cycle of poverty and creating a brighter future.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>School fees and scholastic materials for primary and secondary students</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Mentorship and career guidance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>After-school programs and tutoring</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>University scholarships for exceptional students</span>
                </li>
              </ul>
              <div>
                <Link href="/get-involved">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Support This Program</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Training */}
      <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2">
                <Users className="h-5 w-5 text-[#8c3420]" />
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">Skills Training</h2>
              </div>
              <p className="text-gray-700 md:text-lg">
                Our vocational and life skills training programs empower youth and women to create sustainable
                livelihoods. By equipping individuals with practical skills, we help them become self-reliant and
                contribute to their communities.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Tailoring and fashion design</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Carpentry and woodworking</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Agriculture and farming techniques</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Computer literacy and digital skills</span>
                </li>
              </ul>
              <div>
                <Link href="/get-involved">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Support This Program</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <Image
                src={imagePaths.skillsTraining || "/placeholder.svg"}
                alt="Skills training program"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section id="healthcare" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-center justify-center">
              <Image
                src={imagePaths.healthcare || "/placeholder.svg"}
                alt="Healthcare program"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-flex items-center space-x-2">
                <Heart className="h-5 w-5 text-[#8c3420]" />
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">Healthcare</h2>
              </div>
              <p className="text-gray-700 md:text-lg">
                Our healthcare initiatives provide basic healthcare support and mobile medical camps to promote health
                in underserved communities. We believe that good health is fundamental to human dignity and development.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Mobile medical camps in remote areas</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Health education and awareness programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Maternal and child health services</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>HIV/AIDS prevention and support</span>
                </li>
              </ul>
              <div>
                <Link href="/get-involved">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Support This Program</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WASH Initiatives */}
      <section id="wash" className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2">
                <Droplets className="h-5 w-5 text-[#8c3420]" />
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">WASH Initiatives</h2>
              </div>
              <p className="text-gray-700 md:text-lg">
                Our Water, Sanitation, and Hygiene (WASH) initiatives improve community health and wellbeing by
                providing access to clean water and promoting good hygiene practices.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Construction of water wells and boreholes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Sanitation facilities in schools and communities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Hygiene education and awareness campaigns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-[#8c3420] font-bold">•</span>
                  <span>Water management training for communities</span>
                </li>
              </ul>
              <div>
                <Link href="/get-involved">
                  <Button className="bg-[#8c3420] hover:bg-[#6a2718] text-white">Support This Program</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center order-1 lg:order-2">
              <Image
                src={imagePaths.washInitiatives || "/placeholder.svg"}
                alt="WASH initiatives"
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#8c3420] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved</h2>
              <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                There are many ways to support our programs and make a difference in the lives of vulnerable individuals
                in Uganda.
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
        </div>
      </section>
    </div>
  )
}
