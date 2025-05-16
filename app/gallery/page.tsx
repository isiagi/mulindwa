"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { imagePaths } from "@/app/utils/image-paths"
import AnimateOnScroll from "@/components/animate-on-scroll"
import DraggableLightbox from "@/components/draggable-lightbox"

// Define image categories for filtering
const categories = [
  { id: "all", name: "All" },
  { id: "education", name: "Education" },
  { id: "healthcare", name: "Healthcare" },
  { id: "skills", name: "Skills Training" },
  { id: "wash", name: "WASH Initiatives" },
  { id: "events", name: "Events" },
]

// Sample gallery images with metadata
const galleryImages = [
  {
    id: 1,
    src: imagePaths.galleryEducation1,
    alt: "Children in classroom",
    category: "education",
    title: "Primary Education Support",
    description: "Students attending classes at one of our supported schools in Kiboga district.",
  },
  {
    id: 2,
    src: imagePaths.galleryHealthcare1,
    alt: "Medical camp",
    category: "healthcare",
    title: "Mobile Medical Camp",
    description: "Our healthcare team providing medical services in a remote village.",
  },
  {
    id: 3,
    src: imagePaths.gallerySkills1,
    alt: "Vocational training",
    category: "skills",
    title: "Tailoring Workshop",
    description: "Women learning tailoring skills as part of our vocational training program.",
  },
  {
    id: 4,
    src: imagePaths.galleryWash1,
    alt: "Water well construction",
    category: "wash",
    title: "Clean Water Project",
    description: "Construction of a water well to provide clean drinking water to a community.",
  },
  {
    id: 5,
    src: imagePaths.galleryEvents1,
    alt: "Community meeting",
    category: "events",
    title: "Community Engagement",
    description: "Meeting with community leaders to discuss local needs and initiatives.",
  },
  {
    id: 6,
    src: imagePaths.galleryEducation2,
    alt: "School supplies distribution",
    category: "education",
    title: "School Supplies Distribution",
    description: "Distributing books, pens, and other school supplies to students.",
  },
  {
    id: 7,
    src: imagePaths.galleryHealthcare2,
    alt: "Health education session",
    category: "healthcare",
    title: "Health Education",
    description: "Conducting a health education session on disease prevention.",
  },
  {
    id: 8,
    src: imagePaths.gallerySkills2,
    alt: "Computer training",
    category: "skills",
    title: "Digital Skills Training",
    description: "Youth learning computer skills at our digital literacy center.",
  },
  {
    id: 9,
    src: imagePaths.galleryWash2,
    alt: "Hygiene education",
    category: "wash",
    title: "Hygiene Education",
    description: "Teaching proper handwashing techniques to prevent disease spread.",
  },
  {
    id: 10,
    src: imagePaths.galleryEvents2,
    alt: "Fundraising event",
    category: "events",
    title: "Annual Fundraising Gala",
    description: "Our annual fundraising event bringing together supporters and partners.",
  },
  {
    id: 11,
    src: imagePaths.galleryEducation3,
    alt: "Scholarship recipients",
    category: "education",
    title: "Scholarship Program",
    description: "Students who received scholarships to continue their education.",
  },
  {
    id: 12,
    src: imagePaths.gallerySkills3,
    alt: "Agricultural training",
    category: "skills",
    title: "Agricultural Training",
    description: "Teaching sustainable farming techniques to improve food security.",
  },
  {
    id: 13,
    src: imagePaths.galleryHealthcare3,
    alt: "Community health workers",
    category: "healthcare",
    title: "Community Health Workers",
    description: "Training local health workers to provide basic healthcare in their communities.",
  },
  {
    id: 14,
    src: imagePaths.galleryWash3,
    alt: "Sanitation facility",
    category: "wash",
    title: "Sanitation Facilities",
    description: "New sanitation facilities built at a local school to improve hygiene.",
  },
  {
    id: 15,
    src: imagePaths.galleryEvents3,
    alt: "Youth conference",
    category: "events",
    title: "Youth Leadership Conference",
    description: "Annual conference bringing together young leaders from across Uganda.",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((image) => image.category === activeCategory)

  // Get category name for the selected image
  const selectedCategoryName = selectedImage
    ? categories.find((cat) => cat.id === selectedImage.category)?.name
    : undefined

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imagePaths.heroGallery || "/placeholder.svg"}
            alt="Gallery of foundation's work"
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
                  Our Gallery
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore images showcasing our work and impact across Uganda.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="w-full py-8 bg-white border-b">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className={
                    activeCategory === category.id
                      ? "bg-[#8c3420] hover:bg-[#6a2718] text-white"
                      : "border-[#8c3420] text-[#8c3420] hover:bg-[#8c3420] hover:text-white"
                  }
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredImages.map((image, index) => (
              <AnimateOnScroll key={image.id} variant="fade-up" duration={700} delay={100 * (index % 4)}>
                <div
                  className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <AnimateOnScroll variant="fade-up" duration={700}>
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-gray-500 text-lg">No images found in this category.</p>
                <Button
                  className="mt-4 bg-[#8c3420] hover:bg-[#6a2718] text-white"
                  onClick={() => setActiveCategory("all")}
                >
                  View All Images
                </Button>
              </div>
            </AnimateOnScroll>
          )}
        </div>
      </section>

      {/* Draggable Lightbox */}
      {selectedImage && (
        <DraggableLightbox
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          image={selectedImage}
          categoryName={selectedCategoryName}
        />
      )}

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 bg-[#8c3420] text-white">
        <div className="container px-4 md:px-6">
          <AnimateOnScroll variant="fade-up" duration={700}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Work</h2>
                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Help us continue making a difference in the lives of vulnerable individuals across Uganda.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-white text-[#8c3420] hover:bg-gray-100" asChild>
                  <a href="/get-involved">Donate Now</a>
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  )
}
