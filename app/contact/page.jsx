import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Cosy Corner",
  description: "Une question ? Notre équipe vous répond sous 24h.",
};

export default function ContactPage() {
  return (
    <section className="container-page py-16 md:py-24 max-w-lg mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Contactez-nous</h1>
      <p className="text-neutral-500 text-center mb-10 text-[15px]">Notre équipe vous répond sous 24h.</p>
      <ContactForm />
    </section>
  );
}
