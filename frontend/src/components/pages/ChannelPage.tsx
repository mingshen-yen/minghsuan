import { SideBar } from "../layout/SideBar";

export const ChannelPage = () => {
  return (
    <>
      <div className="max-h-screen mx-auto">
        <SideBar />
        <div className="box grid grid-cols-1">
          <div className="">
            <div className="pb-8">
              <em className="text-lg text-white bg-red-700 py-0.5 px-1.5 rounded-lg">
                YouTube
              </em>
              <h3>Mingshen See the world</h3>
            </div>
            <p>
              Exploring corners of the world through curious eyes. <br />
            </p>
          </div>
          <div className="w-full lg:w-132 shrink-0">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                width="530"
                height="315"
                src="https://www.youtube.com/embed/pg7PZ-fqcWY?si=aUXkCNd7tuXmz2B5"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="">
            <div className="pb-8">
              <em className="text-lg text-slate-900 bg-yellow-400 py-0.5 px-1.5 rounded-lg">
                Podcast
              </em>
              <h3>Huh? Germany!</h3>
            </div>
            <p>
              A Taiwanese in Germany — sharing life abroad, travel stories, and
              quiet observations from daily moments in between.
            </p>
          </div>
          <div className="w-full lg:w-132 shrink-0">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="block"
                title="Firstory Podcast"
                width="530"
                height="316"
                src="https://open.firstory.me/embed/user/cmdthrpjf01ra01umdz514uwp"
                scrolling="no"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
