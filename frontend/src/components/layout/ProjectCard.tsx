import { projects } from "../../data/portofolio";
import { Link } from "react-router";

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => {
        return (
          <>
            <Link
              to={`${project.link}`}
              key={`${project.title}`}
              className="card border h-60 w-60 border-slate-600 bg-[#132b22] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(93,232,176,0.25)]"
            >
              <div className="frame h-30 bg-slate-800">
                <img className="object-fill" src={`${project.img}`} alt="img" />
              </div>
              <div className="card-label flex flex-col gap-2 p-4">
                <div className="card-title text-start text-xl">
                  {project.title}
                </div>
                <div className="tag text-sm bg-cyan-400 text-slate-900 font-medium rounded-sm w-fit px-1.5 py-0.5">
                  WEB
                </div>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};
