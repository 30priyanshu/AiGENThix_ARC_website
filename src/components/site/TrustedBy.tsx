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
    <section className="relative overflow-hidden pt-3 pb-3">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-50 via-white to-cyan-50" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">
          <h2 className="mt-5 text-2xl font-bold tracking-tight text-navy md:text-3xl">
            Trusted by professionals from{" "}
            <span className="text-cyan-600">
              leading global enterprises
            </span>
          </h2>

        </div>

        {/* Logo Slider */}
        <div className="mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

          <div className="flex w-max items-center gap-8 animate-marquee">

            {[...logos, ...logos].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="
                  flex
                  h-20
                  min-w-[180px]
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/80
                  bg-white
                  px-8
                  shadow-[0_8px_30px_rgba(15,23,42,0.06)]
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-cyan-200
                  hover:shadow-[0_15px_45px_rgba(6,182,212,0.18)]
                "
              >
                <img
                  src={item.url}
                  alt={item.name}
                  loading="lazy"
                  draggable={false}
                  className="
                    h-10
                    max-w-[130px]
                    object-contain
                    opacity-90
                    transition-all
                    duration-500
                    hover:scale-110
                    hover:opacity-100
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