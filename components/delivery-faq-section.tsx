import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DeliveryFAQSection() {
  const faqs = [
    {
      question: "What are the usage rights for the delivered images?",
      answer:
        "Standard packages include basic usage rights for web and social media promotion. Extended commercial licenses for print, advertising, or other specific uses can be negotiated and added to your package. All images remain copyrighted to PeakFrame.",
    },
    {
      question: "What is the typical turnaround time for image delivery?",
      answer:
        "For most projects, the initial proofing gallery is delivered within 3-5 business days. Final retouched images are typically delivered within 10-15 business days after your selection and approval. Expedited delivery options are available upon request.",
    },
    {
      question: "How many revisions are included in the package?",
      answer:
        "Each package includes one round of minor revisions on selected images to ensure your satisfaction. Additional revisions or extensive changes may incur an extra fee, which will be discussed and agreed upon beforehand.",
    },
    {
      question: "How are the final images delivered?",
      answer:
        "Final high-resolution images are delivered via a secure online gallery, from which you can easily download them. The gallery will remain active for a specified period, typically 30-60 days.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Delivery & FAQ</h2>
          <p className="text-muted-foreground text-lg md:text-xl text-pretty">
            Answers to common questions about image delivery, usage rights, and revisions.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
