import { useEffect, useRef, useState } from "react";
import {
Code2,
Database,
Monitor,
Server,
Wrench,
ArrowRight,
Check,
type LucideIcon,
} from "lucide-react";
import "./tech.css";

type Category =
| "Todas"
| "Frontend"
| "Backend"
| "APIs"
| "Banco de Dados"
| "DevOps & Ferramentas";

type Technology = {
name: string;
icon: string;
};

type CategoryData = {
title: string;
description: string;
details: string[];
icon: LucideIcon;
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
{
name: "Tailwind CSS",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
},
],
},

Backend: {
title: "Backend",
description:
"Desenvolvimento de aplicações, regras de negócio e serviços para processamento e gerenciamento de dados.",
icon: Server,
details: [
"Desenvolvimento de aplicações backend",
"Construção de regras de negócio",
"Integração com bancos de dados",
"Arquitetura e organização de aplicações",
],
technologies: [
{
name: "C#",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
},
{
name: ".NET",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
},
{
name: "ASP.NET Core",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
},
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

APIs: {
title: "APIs",
description:
"Desenvolvimento e integração de APIs para comunicação entre aplicações, serviços e bases externas.",
icon: Server,
details: [
"Desenvolvimento de APIs REST",
"Integração entre frontend e backend",
"Documentação de endpoints",
"Integração com serviços e bases externas",
],
technologies: [
{
name: "REST API",
icon:
"https://img.icons8.com/?size=100&id=1349&format=png&color=000000",
},
{
name: "ASP.NET Core Web API",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
},
{
name: "Swagger",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
},
{
name: "Entity Framework Core",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg",
},
],
},

"Banco de Dados": {
title: "Banco de Dados",
description:
"Modelagem, persistência e gerenciamento de dados utilizando bancos relacionais.",
icon: Database,
details: [
"Modelagem e organização de dados",
"Consultas utilizando SQL",
"Relacionamento entre tabelas",
"Persistência e gerenciamento de informações",
],
technologies: [
{
name: "PostgreSQL",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
},
{
name: "SQL",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
},
],
},

"DevOps & Ferramentas": {
title: "DevOps & Ferramentas",
description:
"Práticas e ferramentas utilizadas para versionamento, containerização, hospedagem, deploy e criação.",
icon: Wrench,
details: [
"Versionamento e colaboração com Git e GitHub",
"Containerização de aplicações com Docker",
"Deploy e hospedagem de aplicações",
"Organização de projetos e fluxos de desenvolvimento",
"Criação de elementos em Pixel Art",
],
technologies: [
{
name: "Git",
icon:
"https://img.icons8.com/?size=100&id=62856&format=png&color=000000",
},
{
name: "GitHub",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
},
{
name: "Docker",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
},
{
name: "Vercel",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
},
{
name: "Render",
icon:
"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/render/render-original.svg",
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
icon: LucideIcon;
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
name: "APIs",
icon: Server,
},
{
name: "Banco de Dados",
icon: Database,
},
{
name: "DevOps & Ferramentas",
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
onClick,
}: {
data: CategoryData;
onClick: () => void;
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

    <button
      type="button"
      className="category-arrow-button"
      onClick={onClick}
      aria-label={"Ver " + data.title}
    >
      <ArrowRight
        className="category-arrow"
        size={18}
      />
    </button>
  </div>

  <div className="technology-list">
    {data.technologies.map(function (technology) {
      return (
        <TechnologyBadge
          key={technology.name}
          technology={technology}
        />
      );
    })}
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
        {data.details.map(function (detail) {
          return (
            <div
              className="detail-item"
              key={detail}
            >
              <span className="check-icon">
                <Check size={14} />
              </span>

              <span>{detail}</span>
            </div>
          );
        })}
      </div>
    </div>

    <div className="details-column">
      <h4>Tecnologias</h4>

      <div className="technology-list details-technologies">
        {data.technologies.map(function (technology) {
          return (
            <TechnologyBadge
              key={technology.name}
              technology={technology}
            />
          );
        })}
      </div>
    </div>
  </div>
</div>

);
}

export default function Tech() {
const [activeCategory, setActiveCategory] =
useState<Category>("Todas");

const [isVisible, setIsVisible] = useState(false);

const sectionRef = useRef<HTMLElement>(null);

useEffect(function () {
const section = sectionRef.current;

if (!section) {
  return;
}

const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.disconnect();
    }
  },
  {
    threshold: 0.15,
  }
);

observer.observe(section);

return function () {
  observer.disconnect();
};

}, []);

function handleCategoryChange(category: Category) {
setActiveCategory(category);
}

const activeData = technologies[activeCategory];

return (
<section
ref={sectionRef}
id="tech"
className={
"tech-section" +
(isVisible ? " tech-visible" : "")
}
>
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
        Tecnologias, ferramentas e práticas que utilizo
        para desenvolver, integrar, containerizar e
        disponibilizar aplicações.
      </p>
    </div>

    <div className="tech-tabs">
      {categories.map(function (category) {
        const Icon = category.icon;
        const isActive =
          activeCategory === category.name;

        return (
          <button
            key={category.name}
            type="button"
            className={
              "tech-tab" +
              (isActive ? " active" : "")
            }
            onClick={function () {
              handleCategoryChange(category.name);
            }}
          >
            <Icon size={22} strokeWidth={1.8} />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>

    {activeCategory === "Todas" ? (
      <div className="category-grid">
        <CategoryCard
          data={technologies.Frontend!}
          onClick={function () {
            handleCategoryChange("Frontend");
          }}
        />

        <CategoryCard
          data={technologies.Backend!}
          onClick={function () {
            handleCategoryChange("Backend");
          }}
        />

        <CategoryCard
          data={technologies.APIs!}
          onClick={function () {
            handleCategoryChange("APIs");
          }}
        />

        <CategoryCard
          data={technologies["Banco de Dados"]!}
          onClick={function () {
            handleCategoryChange("Banco de Dados");
          }}
        />

        <CategoryCard
          data={
            technologies["DevOps & Ferramentas"]!
          }
          onClick={function () {
            handleCategoryChange(
              "DevOps & Ferramentas"
            );
          }}
        />
      </div>
    ) : (
      activeData && (
        <CategoryDetails data={activeData} />
      )
    )}
  </div>
</section>

);
}