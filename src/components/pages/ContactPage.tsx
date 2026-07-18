import { SideBar } from "../layout/SideBar";

export const ContactPage = () => {
  return (
    <div className="max-h-screen mx-auto flex items-center justify-center">
      {/* <SideBar /> */}
      <div className="section">
        <div className="flex flex-col gap-8 pb-10 lg:pb-30 h-fit">
          <h2>Reach out me</h2>
          <p>
            You can send me an email: <span> </span>
            <a
              href="mailto:minghsuanyen@gmail.com"
              className="text-blue-500 underline"
            >
              minghsuanyen@gmail.com
            </a>
          </p>
          <p> I will be in contact with you as soon as I can.</p>
        </div>
      </div>
    </div>
  );
};
