import React, { useEffect } from "react";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="space-y-[45px] md:space-y-[70px] lg:space-y-[100px] max-w-[1280px] mx-auto md:py-[83px] px-[30px] md:px-[80px] py-[57px] ">
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          Terms and Conditions
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
          You should read these Terms because they contain our legal commitments
          to you and a number of DOs and DON'Ts which you need to be aware of
          when you use our Services. Please read these Terms carefully to make
          sure you understand them. By using our Services, you are automatically
          deemed to agree to accept and be legally bound by these Terms. For the
          avoidance of doubt if you do not agree with the Terms, you should not
          proceed to access or use our Services. <br /> <br />
          You should also read our Privacy Policy. The Privacy Policy explains
          how we use your personal data. If you think that there is a mistake in
          these terms or have any queries, please contact us to discuss. If we
          have to contact you, we will do so by writing to you at the email
          address you have provided to us. It is therefore very important that
          you confirm you have provided a legitimate email address that is used
          by you personally and by proceeding with use of our Services you
          warrant that you have done so. We will only contact you if you have
          given explicit consent for us to do so. The only other time you will
          receive emails is where you have registered to receive our newsletter
          and updates. <br /> <br /> When we use the words "writing" or
          "written" in these terms, this includes emails.
        </p>
      </div>
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          Using Our Service / Buying Coins
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
          To use our service, you will need to have a virtual wallet. We draw
          your attention that wallets are third-party services, and we advise
          you to read their terms of use.
        </p>
      </div>
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          Security
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
          Security is important to Rexas, and you therefore agree not to share
          your wallet access with any other user or third party, or knowingly
          carry out any activity which enables a third party to access or use
          your account. If we believe, acting in our discretion, that your
          account is used inappropriately, we reserve the right to suspend or
          terminate or cease to support your account without liability. <br />
          <br />
          We cannot check the identities of people using our Services and will
          not be liable if your wallet connection or account is used by someone
          else. If you become aware of any unauthorised use of your login, you
          should notify us immediately by contacting us at admin@rexas.com,
          using 'Security Breach' as the subject line. Please note that we may
          need to verify your identity and validate ownership of the account. Be
          alert for other websites and services which may pretend to be us or to
          be associated with us.
        </p>
      </div>
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          Removing Data
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
          If you would like us to delete any data we may hold on you, please
          contact us by emailing admin@rexas.com. Whereas we do not require
          personal or identifiable information upon signing up to use our
          service, we may still hold details for you if you have provided an
          email address to us or given us permission to contact you. If you wish
          for your data to be removed, you must specify this in your email. If
          you do not request deletion, we will hold this information as outlined
          in our Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
