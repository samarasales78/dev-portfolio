import { useState } from "react";
import {
  Code2,
  Database,
  Monitor,
  Server,
  Wrench,
  ArrowRight,
  Check,
} from "lucide-react";
import "./tech.css";

type Category =
  | "Todas"
  | "Frontend"
  | "Backend"
  | "Banco de Dados"
  | "Ferramentas";

type Technology = {
  name: string;
  icon: string;
};

type CategoryData = {
  title: string;
  description: string;
  details: string[];
  icon: typeof Monitor;
  technologies: Technology[];
};

const technologies: Record<Category, CategoryData | null> = {
  Todas: null,

  Frontend: {
    title: "Frontend",
    description:
      "Construção de interfaces modernas, responsivas e focadas na experiência do usuário.",
    icon: Monitor,
    details: [
      "Interfaces responsivas e adaptáveis",
      "Componentes reutilizáveis",
      "Aplicações com React e TypeScript",
      "Integração entre interfaces e APIs",
    ],
    technologies: [
      {
        name: "HTML",
        icon:
          "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      },
      {
        name: "CSS",
        icon:
          "https://img.icons8.com/?size=100&id=21278&format=png&color=000000",
      },
      {
        name: "JavaScript",
        icon:
          "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      },
      {
        name: "TypeScript",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Vite",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg",
      },
    ],
  },

  Backend: {
    title: "Backend",
    description:
      "Desenvolvimento de APIs, lógica de negócio e soluções para processamento de dados.",
    icon: Server,
    details: [
      "Desenvolvimento de APIs",
      "Integração entre sistemas",
      "Processamento e organização de dados",
      "Construção da lógica de negócio",
    ],
    technologies: [
      {
        name: "Python",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Dart",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
      {
        name: "Flutter",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
    ],
  },

  "Banco de Dados": {
    title: "Banco de Dados",
    description:
      "Armazenamento, organização e gerenciamento de dados de forma estruturada e eficiente.",
    icon: Database,
    details: [
      "Modelagem e organização de dados",
      "Consultas utilizando SQL",
      "Relacionamento entre tabelas",
      "Persistência e gerenciamento de informações",
    ],
    technologies: [
      {
        name: "MySQL",
        icon:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
    ],
  },

  Ferramentas: {
    title: "Ferramentas",
    description:
      "Ferramentas e recursos utilizados para desenvolvimento, versionamento e criação.",
    icon: Wrench,
    details: [
      "Versionamento de código com Git",
      "Organização e controle de projetos",
      "Fluxos de desenvolvimento",
      "Criação de elementos em Pixel Art",
    ],
    technologies: [
      {
        name: "Git",
        icon:
          "https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
      },
      {
        name: "Pixel Art",
        icon:
          "https://img.icons8.com/?size=100&id=X5YZ2OUzP87M&format=png&color=000000",
      },
    ],
  },
};

const categories: {
  name: Category;
  icon: typeof Monitor;
}[] = [
  {
    name: "Todas",
    icon: Code2,
  },
  {
    name: "Frontend",
    icon: Monitor,
  },
  {
    name: "Backend",
    icon: Server,
  },
  {
    name: "Banco de Dados",
    icon: Database,
  },
  {
    name: "Ferramentas",
    icon: Wrench,
  },
];

function TechnologyBadge({
  technology,
}: {
  technology: Technology;
}) {
  return (
    <div className="technology-badge">
      <div className="technology-badge-icon">
        <img src={technology.icon} alt={technology.name} />
      </div>
      <span>{technology.name}</span>
    </div>
  );
}

function CategoryCard({
  data,
}: {
  data: CategoryData;
}) {
  const Icon = data.icon;

  return (
    <article className="category-card">
      <div className="category-card-header">
        <div className="category-icon">
          <Icon size={38} strokeWidth={1.7} />
        </div>

        <div className="category-card-content">
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>

        <ArrowRight className="category-arrow" size={22} />
      </div>

      <div className="technology-list">
        {data.technologies.map((technology) => (
          <TechnologyBadge
            key={technology.name}
            technology={technology}
          />
        ))}
      </div>
    </article>
  );
}

function CategoryDetails({
  data,
}: {
  data: CategoryData;
}) {
  const Icon = data.icon;

  return (
    <div className="category-details">
      <div className="details-header">
        <div className="details-icon">
          <Icon size={42} strokeWidth={1.7} />
        </div>

        <div>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>

      <div className="details-content">
        <div className="details-column">
          <h4>O que desenvolvo</h4>

          <div className="details-list">
            {data.details.map((detail) => (
              <div className="detail-item" key={detail}>
                <span className="check-icon">
                  <Check size={14} />
                </span>

                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="details-column">
          <h4>Tecnologias</h4>

          <div className="technology-list details-technologies">
            {data.technologies.map((technology) => (
              <TechnologyBadge
                key={technology.name}
                technology={technology}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Tech() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Todas");

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
  };

  return (
    <section id="tech" className="tech-section">
      <div className="tech-container">
        <div className="tech-heading">
          <div className="tech-heading-decoration">
            <span></span>
            <Code2 size={27} />
            <span></span>
          </div>

          <h2>
            <span>Tecnologias</span>
          </h2>

          <p>
            Ferramentas e tecnologias que utilizo para
            transformar ideias em soluções reais.
          </p>
        </div>

        <div className="tech-tabs">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                className={`tech-tab ${
                  activeCategory === category.name
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryChange(category.name)
                }
              >
                <Icon size={22} strokeWidth={1.8} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {activeCategory === "Todas" ? (
          <div className="category-grid">
            <CategoryCard data={technologies.Frontend!} />
            <CategoryCard data={technologies.Backend!} />
            <CategoryCard
              data={technologies["Banco de Dados"]!}
            />
            <CategoryCard data={technologies.Ferramentas!} />
          </div>
        ) : (
          <CategoryDetails
            data={technologies[activeCategory]!}
          />
        )}
      </div>
    </section>
  );
}