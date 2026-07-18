import { SideBar } from "../layout/SideBar";

export const MediaPage = () => {
  return (
    <div className="min-h-screen mx-auto flex items-center justify-center">
      {/* <SideBar /> */}
      <div className="section section--media">
        <div className="h-full">
          <div className="media-card h-full">
            <div className="media-card__text">
              <div className="media-card__tag bg-red-700">YouTube</div>
              <h3>Mingshen See the world</h3>
              <p>
                Exploring corners of the world through curious eyes. <br />
                <br />
              </p>
            </div>
            <div className="media-card__frame media-card__frame--video">
              <iframe
                className="media-card__embed"
                src="https://www.youtube.com/embed/D4RDnNKNF6Q?si=WvGH7TV59YBBbBmz"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
        <div className="h-full">
          <div className="media-card h-full">
            <div className="media-card__text">
              <div className="media-card__tag bg-amber-600">Podcast</div>
              <h3>Huh? Germany!</h3>
              <p>
                A Taiwanese in Germany — sharing life abroad, travel stories,
                and quiet observations from daily moments in between.
              </p>
            </div>
            <div className="media-card__frame">
              <iframe
                className="media-card__embed"
                title="Firstory Podcast"
                src="https://open.firstory.me/embed/user/cmdthrpjf01ra01umdz514uwp"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
