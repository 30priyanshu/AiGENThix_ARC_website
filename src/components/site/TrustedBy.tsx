const logos = [
  "MICROSOFT", "GOOGLE CLOUD", "AWS", "TATA", "INFOSYS", "DELOITTE", "ACCENTURE",
  "MERCEDES-BENZ", "SIEMENS", "PWC", "WIPRO", "SAP",
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-hairline bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-xl md:text-2xl text-navy/70 mb-8 font-semibold">
          Trusted by teams at leading global enterprises
        </h2>
        <div className="mt-10 relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-14 animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl tracking-[0.12em] text-navy/40 hover:text-navy/70 transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
