import { InfoCard, PageShell, PrimaryLink, Section } from "@/components/marketing";
import { Reveal } from "@/components/reveal";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Questions, problems, or partnership interest? Email is the best way to reach us."
      intro="For questions about the product, demo feedback, technical issues, or anything else, send us an email and we will get back to you."
    >
      <Section
        eyebrow="Best contact"
        title="Email us"
        intro="hello@utilcompute.com is the main inbox for support, product questions, and general inquiries."
      >
        <Reveal>
          <div className="surface-strong hairline rounded-[2rem] p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <div className="text-[11px] tracking-[0.24em] text-[#706B71] uppercase">
                  Primary contact
                </div>
                <h2 className="mt-2 text-3xl font-semibold tracking-[-0.05em] text-white">
                  hello@utilcompute.com
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-[#A7A8AB]">
                  Email is the best way to contact us about questions, problems, product details,
                  partnerships, or anything else related to Util.
                </p>
                <div className="mt-6">
                  <PrimaryLink href="mailto:hello@utilcompute.com">Email Util</PrimaryLink>
                </div>
              </div>

              <InfoCard title="What to use this for">
                Product questions, demo follow-up, technical issues, and general business inquiries.
              </InfoCard>
            </div>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
