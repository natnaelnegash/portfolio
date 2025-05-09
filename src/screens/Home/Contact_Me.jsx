import React from "react";
import icons from "../../../constants/icons";
import Contacts from "../../components/Contacts";

const Contact_Me = () => {
  return (
    <section id="contact_me" className="w-full h-[100vh] flex flex-col gap-10">
      <div className="flex flex-col items-center w-full h-full p-3 px-6">
        <p className="text-4xl mb-10">Contact Me</p>
        <div className="grid grid-cols-2 justify-items-center items-center w-full h-[200px]">
          <Contacts
            icon={icons.mail}
            contact="natnaelnegash95@gmail.com"
            link="https://mail.google.com/"
          />
          <Contacts icon={icons.phone} contact="+251924303582" />
          <Contacts
            icon={icons.linkedin}
            contact="in/linkedin"
            link="https://linkedin.com/in/natnael-negash-305996289"
          />
          <Contacts icon={icons.ig} contact="ig/natnael_251" />
          <Contacts
            icon={icons.github}
            contact="github/natnaelnegash"
            link="https://github.com/natnaelnegash"
          />
          <Contacts
            icon={icons.telegram}
            contact="t.me/nat_woo"
            link="https://t.me/nat_woo"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact_Me;
