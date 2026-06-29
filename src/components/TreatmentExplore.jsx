import { useState } from "react";

function TreatmentExplorer() {
  const upperTeeth = Array.from({ length: 16 }, (_, i) => i + 1);
  const lowerTeeth = Array.from({ length: 16 }, (_, i) => i + 17);

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {eyebrow && (
        <span className="inline-flex items-center rounded-full  bg-primary/10 px-4 py-1 text-sm font-semibold text-blue-400">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-lg text-gray-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

  const toothData = {
    1: {
      problem: "Mild enamel erosion · sensitivity to cold",
      procedure: "Composite bonding + fluoride therapy",
      recovery: "No downtime · resume eating in 1 hour",
      cost: "$280 – $420",
    },
    2: {
      problem: "Deep cavity",
      procedure: "Dental Filling",
      recovery: "24 hours",
      cost: "$150 – $250",
    },
    3: {
      problem: "Cracked tooth",
      procedure: "Dental Crown",
      recovery: "2–3 days",
      cost: "$700 – $1200",
    },
    4: {
      problem: "Wisdom tooth pain",
      procedure: "Tooth Extraction",
      recovery: "5–7 days",
      cost: "$250 – $500",
    },
    5: {
      problem: "Missing tooth",
      procedure: "Dental Implant",
      recovery: "3–6 months",
      cost: "$2500 – $3500",
    },
    default: {
      problem: "Healthy tooth",
      procedure: "Routine Dental Cleaning",
      recovery: "No Recovery",
      cost: "$80",
    },
  };

  const [selectedTooth, setSelectedTooth] = useState(1);

  const details = toothData[selectedTooth] || toothData.default;

  return (
    <section className="py-24 bg-blue-300/10">
      <div className="mx-auto max-w-7xl px-4">

        <SectionHeader
          eyebrow="3D Treatment Explorer"
          title="Tap a tooth. Understand the path forward."
          subtitle="An interactive way to learn about the procedure, recovery time, and estimated investment for each tooth."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">

          {/* Teeth */}
          <div className="glass-card rounded-3xl p-10">

            {/* Upper Teeth */}
            <div className="grid grid-cols-8 gap-2 mb-3">
              {upperTeeth.map((tooth) => (
                <button
                  key={tooth}
                  onClick={() => setSelectedTooth(tooth)}
                  className={`aspect-square rounded-xl transition shadow-sm
                    ${
                      selectedTooth === tooth
                        ? "bg-[#4F8DFF] border-primary text-white"
                        : "bg-white   hover:bg-primary  hover:text-white"
                    }`}
                >
                  {tooth}
                </button>
              ))}
            </div>

            <div className="h-px bg-border my-4" />

            {/* Lower Teeth */}
            <div className="grid grid-cols-8 gap-2">
              {lowerTeeth.map((tooth) => (
                <button
                  key={tooth}
                  onClick={() => setSelectedTooth(tooth)}
                  className={`aspect-square rounded-xl  transition shadow-sm
                    ${
                      selectedTooth === tooth
                        ? "bg-[#4F8DFF] border-primary text-white"
                        : "bg-white border-border hover:bg-primary hover:border-primary hover:text-white"
                    }`}
                >
                  {tooth}
                </button>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              Click any tooth to explore treatments
            </p>
          </div>

          {/* Details */}
          <div className="space-y-4">

            <ExplorerRow
              label="Problem"
              value={details.problem}
            />

            <ExplorerRow
              label="Procedure"
              value={details.procedure}
            />

            <ExplorerRow
              label="Recovery"
              value={details.recovery}
            />

            <ExplorerRow
              label="Estimated cost"
              value={details.cost}
            />

            <div className="grid grid-cols-2 gap-3 rounded-3xl bg-white border border-gray-200 p-4">

              <div className="rounded-2xl bg-soft aspect-4/3 grid place-items-center text-xs text-muted-foreground bg-blue-300/10">
                Before
              </div>

              <div className="rounded-2xl bg-linear-to-br from-[#4F8DFF] to-[#3CBCC3] aspect-4/3 grid place-items-center text-xs font-semibold text-white">
                After
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function ExplorerRow({ label, value }) {
  return (
    <div className="rounded-2xl bg-white border border-gray-200 p-4 flex items-start justify-between gap-4">
      <span className="text-xs uppercase tracking-wider text-gray-600 font-semibold">
        {label}
      </span>

      <span className="text-sm font-medium text-foreground text-right">
        {value}
      </span>
    </div>
  );
}

export default TreatmentExplorer;