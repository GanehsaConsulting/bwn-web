import { ContactForm } from "@/components/contact/contact-form";
import { RightSection } from "@/components/contact/right-section";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="bg-sec-dark w-full min-h-screen flex flex-col items-center justify-center sm:px-6 px-3 py-20 relative font-poppins">
      <Image
        src="https://images.unsplash.com/photo-1573038869743-efdc337369a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="contact illustration"
        fill
        className="object-cover opacity-80"
      />
      <section className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-10 items-stretch sm:mb-20">
        <ContactForm />
        <RightSection />
      </section>
    </main>
  );
}
