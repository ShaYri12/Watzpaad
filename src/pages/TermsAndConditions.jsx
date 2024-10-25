import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t } = useTranslation("terms");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const renderSection = (titleKey, descriptionKey, listKey) => (
    <div className="space-y-[34px] text-grayish">
      <h1 className="font-bold text-2xl md:text-4xl leading-snug text-[#38DCC8]">
        {t(titleKey)}
      </h1>
      <p className="text-sm md:text-lg font-light leading-relaxed ">
        {t(descriptionKey)}
      </p>
      {listKey && (
        <ul className="list-disc pl-5 space-y-2">
          {t(listKey, { returnObjects: true }).map((item, index) => (
            <li
              key={index}
              className="text-sm md:text-lg font-light leading-relaxed "
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <div className="space-y-[45px] md:space-y-[70px] lg:space-y-[100px] max-w-[1280px] mx-auto md:py-[83px] px-[30px] md:px-[80px] py-[57px]">
      {renderSection(
        "terms_and_conditions_title",
        "terms_and_conditions_description"
      )}
      {renderSection("changes_to_terms_title", "changes_to_terms_description")}
      {renderSection("buying_coins_title", "buying_coins_description")}
      {renderSection("security_title", "security_description")}
      {renderSection("removing_data_title", "removing_data_description")}
      {renderSection(
        "rules_of_use_title",
        "rules_of_use_description",
        "rules_of_use_list"
      )}
      {renderSection(
        "violation_of_rules_title",
        "violation_of_rules_description"
      )}
      {renderSection(
        "service_interruption_title",
        "service_interruption_description"
      )}
      {renderSection(
        "prohibited_person_title",
        "prohibited_person_description"
      )}
      {renderSection("third_parties_title", "third_parties_description")}
      {renderSection(
        "agreeing_to_terms_title",
        "agreeing_to_terms_description"
      )}
      {renderSection("children_title", "children_description")}
      {renderSection(
        "content_and_ip_rights_title",
        "content_and_ip_rights_description"
      )}
      {renderSection(
        "additional_important_information_title",
        "additional_important_information_description",
        "additional_important_information_list"
      )}
    </div>
  );
};

export default TermsAndConditions;
