import React from "react";

const logos = [
  {
    name: "Microsoft",
    url: "https://uhf.microsoft.com/images/microsoft/RE1Mu3b.png",
  },
  {
    name: "Google",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Google_2026_logo.svg/500px-Google_2026_logo.svg.png",
  },
  {
    name: "AWS",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Amazon_Web_Services_2025.svg/500px-Amazon_Web_Services_2025.svg.png",
  },
  {
    name: "Tata",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/330px-Tata_logo.svg.png",
  },
  {
    name: "Infosys",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/500px-Infosys_logo.svg.png",
  },
  {
    name: "Deloitte",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Logo_of_Deloitte.svg/500px-Logo_of_Deloitte.svg.png",
  },
  {
    name: "Accenture",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/500px-Accenture.svg.png",
  },
  {
    name: "Siemens",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Siemens_AG_logo.svg/500px-Siemens_AG_logo.svg.png",
  },
  {
    name: "PwC",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/PwC_Company_Logo.svg/500px-PwC_Company_Logo.svg.png",
  },
  {
    name: "Wipro",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Wipro_new_logo.svg/500px-Wipro_new_logo.svg.png",
  },
  {
    name: "SAP",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/500px-SAP_2011_logo.svg.png",
  },
];

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-slate-200 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-slate-700">
          Trusted by teams at leading global enterprises
        </h2>

        <div className="mt-12 relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex items-center gap-16 whitespace-nowrap animate-marquee">
            {[...logos, ...logos].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="flex items-center justify-center min-w-[180px]"
              >
                <img
                  src={item.url}
                  alt={item.name}
                  loading="lazy"
                  className="
  h-12
  max-w-[140px]
  object-contain
  opacity-90
  hover:opacity-100
  hover:scale-110
  transition-all
  duration-500
  drop-shadow-sm
"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}