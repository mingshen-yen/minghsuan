import { ContactForm } from "../layout/ContactForm";
import { SideBar } from "../layout/SideBar";

export const ContactPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <div className="box">
        <div className="flex flex-col gap-8 pb-10 lg:pb-50 h-fit">
          <h2>Reach out me</h2>
          <p>
            You can also send me an email. <br /> I will be in contact with you
            as soon as I can.
          </p>
        </div>
        <div className="col-span-2 px-10 py-8 gap-8 flex flex-wrap bg-[#348564] rounded-sm">
          <h3>CONTACT FORM</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
