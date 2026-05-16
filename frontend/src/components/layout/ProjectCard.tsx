export const ProjectCard = () => {
  return (
    <>
      <div className="card border border-slate-600 rounded-xl bg-[#132b22] hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(93,232,176,0.25)]">
        <div className="frame rounded-t-xl h-50 bg-amber-800">
          <img className="object-fill" src="#" alt="img" />
        </div>
        <div className="card-label flex flex-col gap-2 p-4">
          <div className="card-title text-start text-xl">JoinMi</div>
          <div className="tag text-sm bg-cyan-400 text-slate-900 font-medium rounded-sm w-fit px-1.5 py-0.5">
            WEB
          </div>
        </div>
      </div>
    </>
  );
};
