const members = [
  {
    initials: "DA",
    name: "Dayo Ayodeji",
    role: "Architecture & Business Development",
    discipline: "Architect",
    bio: "Brings architectural design thinking to product development and leads Bamboostic's commercial strategy — from investor relations and partnership structures to export market positioning. The connective tissue between the farm, the factory, and the customer.",
    avatarBg: "bg-bamboo-200",
    avatarText: "text-bamboo-900",
  },
  {
    initials: "DL",
    name: "Dauda Ladipo",
    role: "Engineering Lead",
    discipline: "Agricultural Engineering",
    bio: "Oversees the full technical engineering stack — processing machinery, capacity planning, treatment systems, and quality control. His agricultural engineering expertise is what turns 96 hectares of bamboo into precisely specified, commercially graded output.",
    avatarBg: "bg-earth-200",
    avatarText: "text-earth-900",
  },
  {
    initials: "LA",
    name: "Laja Adesina",
    role: "Cultivation & R&D",
    discipline: "Agronomy & Animal Science",
    bio: "The agronomic foundation of the FUNAAB joint venture. Leads species selection, planting schedules, soil health, and yield optimisation — including the castor-bamboo intercropping model that generates short-cycle cash flow alongside the long-term bamboo inventory.",
    avatarBg: "bg-sage",
    avatarText: "text-bamboo-900",
  },
  {
    initials: "AA",
    name: "Ayobami Ayodeji",
    role: "International Liaisons",
    discipline: "Industrial Engineering & AI",
    bio: "Drives international trade relationships and market development across Europe, the Middle East, and North America. Industrial engineering discipline applied to process optimisation; AI and data systems lens informing Bamboostic's operations and market intelligence strategy.",
    avatarBg: "bg-bamboo-100",
    avatarText: "text-bamboo-800",
  },
];

export default function Team() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-bamboo-100 text-bamboo-700 rounded-full text-sm font-medium mb-4">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-bamboo-900 mb-5">
            Built by People Who Know the Ground.
          </h2>
          <p className="text-lg text-bamboo-600 max-w-2xl mx-auto">
            Bamboostic is not a concept. It is a working operation built by four
            specialists — in architecture, engineering, agronomy, and trade —
            who each contribute a layer the others cannot replicate.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="group p-8 rounded-3xl bg-cream border border-bamboo-100 hover:border-bamboo-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5 mb-6">
                {/* Avatar */}
                <div
                  className={`w-16 h-16 rounded-2xl ${member.avatarBg} ${member.avatarText} flex items-center justify-center text-xl font-bold shrink-0`}
                >
                  {member.initials}
                </div>

                {/* Name + role */}
                <div>
                  <h3 className="text-xl font-bold text-bamboo-900">
                    {member.name}
                  </h3>
                  <p className="text-bamboo-600 font-medium mt-0.5">
                    {member.role}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 bg-bamboo-100 text-bamboo-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                    {member.discipline}
                  </span>
                </div>
              </div>

              <p className="text-bamboo-600 leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
