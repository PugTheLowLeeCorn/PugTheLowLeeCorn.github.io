import { useState } from "react";

const projects = [
  {
    title: "Smart Fruit System",
    description:
      "A web-based fruit management and e-commerce system with product, account, cart, and order management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/PugTheLowLeeCorn",
  },
  {
    title: "FixProTech Application",
    description:
      "A full-stack web application for business management using Java, Spring Boot, JPA/Hibernate, and PostgreSQL.",
    tech: ["Java", "Spring Boot", "JPA/Hibernate", "PostgreSQL"],
    github: "https://github.com/PugTheLowLeeCorn",
  },
];

const skills = {
  Programming: ["Java", "JavaScript", "SQL", "HTML", "CSS"],
  Frameworks: ["Spring Boot", "React", "Tailwind CSS"],
  Databases: ["MongoDB", "PostgreSQL", "MySQL"],
  Technologies: ["JPA/Hibernate", "REST API"],
  Tools: ["Git", "GitHub", "Docker", "Postman"],
};

const certifications = [
  {
    name: "Software Development Lifecycle Specialization",
    issuer: "University of Minnesota — Coursera",
    link: "https://coursera.org/share/a6a2417482e15308507da2444d9a9b85",
  },
  {
    name: "User Experience Research and Design",
    issuer: "University of Michigan — Coursera",
    link: "https://coursera.org/share/bb8e5e777636fac284bce7695538e56c",
  },
  {
    name: "Computer Communications Specialization",
    issuer: "University of Colorado System — Coursera",
    link: "https://coursera.org/share/c94d2fbb48628ac75773c67a77b95b45",
  },
  {
    name: "Project Management Principles and Practices",
    issuer: "University of California, Irvine — Coursera",
    link: "https://coursera.org/share/c06e27f0c6afdb2732c83a66421f0b40",
  },
  {
    name: "Certificate on the Job Training",
    issuer: "FPT University / FPT Software — 2025",
    link: "https://fap.fpt.edu.vn/temp/bf9d2d3f-3b9a-4f10-b278-3356f2e31e3f.pdf",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#eef7ff] text-[#0b3466]">
      {/* NAVBAR */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0b3466]/95 shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black tracking-wide text-white"
          >
            KHOA<span className="text-sky-300">.</span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "certifications",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-medium capitalize text-white/85 transition hover:text-sky-300"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0b3466] px-6 py-4 md:hidden">
            {[
              "home",
              "about",
              "experience",
              "projects",
              "skills",
              "certifications",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full py-3 text-left text-sm font-medium capitalize text-white/85 transition hover:text-sky-300"
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b3466] via-[#17588d] to-[#8bc7ed]"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-300/10 blur-3xl" />
        <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-16 pt-28">
          <div className="grid w-full items-center gap-12 md:grid-cols-[0.75fr_1.4fr]">
            {/* PROFILE */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 scale-110 rounded-full bg-sky-300/20 blur-3xl" />

                <img
                  src="profile.jpg"
                  alt="Nguyen Dang Khoa"
                  className="relative h-64 w-64 rounded-full border-8 border-white object-cover shadow-2xl sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                />
              </div>
            </div>

            {/* HERO TEXT */}
            <div className="text-white">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-sky-200">
                Software Engineering Student
              </p>

              <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl lg:text-7xl">
                NGUYEN
                <br />
                DANG KHOA
              </h1>

              <h2 className="mt-6 text-2xl font-medium text-sky-100 sm:text-3xl">
                Fresher Software Engineer
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
                Software Engineering graduate from FPT University – Can Tho Campus, with hands-on experience in web 
                application development and an internship at FPT Software. 
                Familiar with Java, Spring Boot, React, MongoDB, and PostgreSQL, with a strong interest in backend and full-stack web development.

                I enjoy building practical web applications, learning new technologies, and continuously 
                improving my software engineering skills through real-world projects and hands-on experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="rounded-full bg-white px-7 py-3 font-bold text-[#0b3466] shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  View Projects
                </button>

                <a
                  href="https://github.com/PugTheLowLeeCorn"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/40 px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  GitHub ↗
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Java", "Spring Boot", "React", "MongoDB"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="About Me" />

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60">
              <p className="leading-8 text-slate-600">
                I am a Software Engineering student at FPT University – Can Tho
                Campus, interested in backend and full-stack web development.
                My main technologies include Java, Spring Boot, React, MongoDB,
                and PostgreSQL.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                I enjoy building practical web applications, learning new
                technologies, and improving my software engineering skills
                through real-world projects and hands-on experience.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60">
              <img
                src="fpt-university.jpg"
                alt="FPT University Can Tho Campus"
                className="h-56 w-full object-cover"
              />

              <div className="p-7">
                <div className="flex flex-col justify-between gap-2 sm:flex-row">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                      Education
                    </p>

                    <h3 className="mt-2 text-xl font-black text-[#0b3466]">
                      Bachelor of Software Engineering
                    </h3>

                    <p className="mt-2 text-slate-600">
                      FPT University – Can Tho Campus
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-slate-500">
                    2021 – 2026
                  </span>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <p className="font-semibold text-[#0b3466]">Languages</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-sky-50 px-3 py-1.5 text-sm text-sky-700">
                      Vietnamese — Native
                    </span>

                    <span className="rounded-full bg-sky-50 px-3 py-1.5 text-sm text-sky-700">
                      English — Intermediate
                    </span>

                    <span className="rounded-full bg-sky-50 px-3 py-1.5 text-sm text-sky-700">
                      Japanese — Elementary
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-[#dff1ff] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Experience" />

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60">
            <div className="grid md:grid-cols-[1fr_0.85fr]">
              <div className="p-8 lg:p-10">
                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                      FPT Software
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-[#0b3466]">
                      Software Engineering Intern
                    </h3>

                    <p className="mt-2 font-semibold text-slate-600">
                      FPT Software — Can Tho
                    </p>
                  </div>

                  <span className="font-medium text-slate-500">
                    Jan 2025 – May 2025
                  </span>
                </div>

                <ul className="mt-8 space-y-5 text-slate-600">
                  <ExperienceItem>
                    Worked in a professional enterprise software development
                    environment and received hands-on training.
                  </ExperienceItem>

                  <ExperienceItem>
                    Participated in developing a software project using Spring
                    Boot and PostgreSQL.
                  </ExperienceItem>

                  <ExperienceItem>
                    Applied software development practices and gained
                    experience working with an enterprise development workflow.
                  </ExperienceItem>
                </ul>
              </div>

              <div className="min-h-[300px]">
                <img
                  src="fpt-software.jpg"
                  alt="FPT Software Can Tho"
                  className="h-full min-h-[300px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Projects" />

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/60 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-sky-600">
                      Project
                    </p>

                    <h3 className="text-2xl font-black text-[#0b3466]">
                      {project.title}
                    </h3>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-[#0b3466] transition hover:border-sky-300 hover:bg-sky-50"
                  >
                    GitHub ↗
                  </a>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[#e7f5ff] px-3 py-1.5 text-sm font-semibold text-[#0b518a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-[#0b3466] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Technical Skills" light />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:bg-white/10"
              >
                <h3 className="text-lg font-bold text-sky-300">{category}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/90"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="Certifications" />

          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((certificate) => (
              <article
                key={certificate.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e7f5ff] text-xl">
                      🎓
                    </div>

                    <div>
                      <h3 className="font-bold leading-6 text-[#0b3466]">
                        {certificate.name}
                      </h3>

                      <p className="mt-2 text-sm text-slate-500">
                        {certificate.issuer}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full border border-[#0b3466] px-4 py-2 text-sm font-semibold text-[#0b3466] transition hover:bg-[#0b3466] hover:text-white"
                  >
                    View Certificate ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#dff1ff] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <SectionTitle title="Let's Connect" />

          <p className="mx-auto max-w-2xl leading-8 text-slate-600">
            I am currently looking for opportunities to grow as a software
            engineer and contribute to meaningful projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:asuramaru10a1@gmail.com"
              className="rounded-full bg-[#0b3466] px-7 py-3 font-bold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Email Me
            </a>

            <a
              href="https://github.com/PugTheLowLeeCorn"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#0b3466] px-7 py-3 font-bold text-[#0b3466] transition duration-300 hover:-translate-y-1 hover:bg-[#0b3466] hover:text-white"
            >
              GitHub
            </a>
          </div>

          <div className="mt-9 space-y-2 text-sm text-slate-500">
            <p>📞 0916612354</p>
            <p>✉ nguyendangkhoa.dev03@gmail.com</p>
            <p>📍 Can Tho, Vietnam</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07294f] px-6 py-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Nguyen Dang Khoa. Built with React.
      </footer>
    </div>
  );
}

function ExperienceItem({ children }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
      <span>{children}</span>
    </li>
  );
}

function SectionTitle({ title, light = false }) {
  return (
    <div className="mb-12">
      <p
        className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${light ? "text-sky-300" : "text-sky-600"
          }`}
      >
        Portfolio
      </p>

      <h2
        className={`text-4xl font-black sm:text-5xl ${light ? "text-white" : "text-[#0b3466]"
          }`}
      >
        {title}
      </h2>

      <div
        className={`mt-5 h-1 w-16 rounded-full ${light ? "bg-sky-300" : "bg-sky-500"
          }`}
      />
    </div>
  );
}

export default App;