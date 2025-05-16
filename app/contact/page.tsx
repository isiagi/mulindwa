"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({
      submitted: false,
      submitting: true,
      info: { error: false, msg: null },
    });

    // Replace these with your actual EmailJS service credentials
    const serviceId = "service_l71p6vh";
    const templateId = "template_g58pjip";
    const publicKey = "fPDV0-QTVLUt_jYp8";

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });
        // Reset form fields after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg: "Something went wrong. Please try again later.",
          },
        });
      });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/13.jpeg"
            alt="Contact Us"
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
                Contact Us
              </h1>
              <p className="mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with us to learn more about our work or how you can
                get involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-[#8c3420] sm:text-4xl">
                  Get In Touch
                </h2>
                <p className="text-gray-700 md:text-lg">
                  We'd love to hear from you. Whether you have a question about
                  our programs, want to volunteer, or are interested in
                  donating, our team is ready to assist you.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col space-y-3 rounded-lg border p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#8c3420]" />
                    <h3 className="font-bold">Our Location</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Kiboga District, Uganda
                    <br />
                    P.O. Box 12345
                  </p>
                </div>
                <div className="flex flex-col space-y-3 rounded-lg border p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#8c3420]" />
                    <h3 className="font-bold">Phone</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    +256 757 437167
                    <br />
                    +256 783 292657
                  </p>
                </div>
                <div className="flex flex-col space-y-3 rounded-lg border p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#8c3420]" />
                    <h3 className="font-bold">Email</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    mulindwacharityfoundation@gmail.com
                  </p>
                </div>
                <div className="flex flex-col space-y-3 rounded-lg border p-4 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#8c3420]" />
                    <h3 className="font-bold">Office Hours</h3>
                  </div>
                  <p className="text-sm text-gray-500">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#8c3420]">
                  Our Location
                </h3>
                <div className="h-64 w-full overflow-hidden rounded-lg bg-gray-200">
                  <Image
                    src="/images/10.jpeg"
                    alt="Map of Kiboga District, Uganda"
                    width={600}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-[#8c3420]">
                Send Us a Message
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="johndoe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                {status.info.error && (
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
                    Error: {status.info.msg}
                  </div>
                )}

                {status.submitted && (
                  <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
                    {status.info.msg}
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-[#8c3420] hover:bg-[#6a2718] text-white"
                  disabled={status.submitting}
                >
                  {status.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f4f4f4]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#8c3420]">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about our organization and how
                you can get involved.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#8c3420]">
                How can I donate to Mulindwa Charity Foundation?
              </h3>
              <p className="mt-2 text-gray-700">
                You can donate through our website, by bank transfer, or by
                sending a check to our office. All donations are tax-deductible.
              </p>
            </div>
            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#8c3420]">
                Can I volunteer with your organization?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, we welcome volunteers! Please fill out our volunteer
                application form on the Get Involved page or contact us
                directly.
              </p>
            </div>
            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#8c3420]">
                How is my donation used?
              </h3>
              <p className="mt-2 text-gray-700">
                Your donation directly supports our programs in education,
                healthcare, skills training, and WASH initiatives. We ensure
                that at least 85% of all donations go directly to program
                activities.
              </p>
            </div>
            <div className="rounded-lg border p-4 shadow-sm">
              <h3 className="text-lg font-bold text-[#8c3420]">
                Can I sponsor a child's education?
              </h3>
              <p className="mt-2 text-gray-700">
                Yes, we have a child sponsorship program that allows you to
                support a specific child's education. Contact us for more
                information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
