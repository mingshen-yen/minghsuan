import { Mail } from "lucide-react";
import { Link } from "react-router";

import { ContactForm } from "../layout/ContactForm";

export const ContactPage = () => {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-baseline justify-center">
          <div className="flex flex-col gap-8">
            <h2>Reach out me</h2>
            <div className="flex px-2 gap-6 justify-center lg:justify-start items-center">
              <Link to={"mailto:minghsuanyen@gmail.com"}>
                <Mail className="w-6 h-6" />
              </Link>
              <a
                href="https://www.linkedin.com/in/ming-hsuan-yen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/src/assets/linkedin.svg" className="w-6 h-6" />
              </a>
            </div>
            <p>
              You can also send me an email. <br /> I will be in contact with
              you as soon as I can.
            </p>
          </div>
          <div className="md:w-fit p-12 gap-8 flex flex-wrap bg-[#348564] rounded-sm">
            <h3>CONTACT FORM</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};
