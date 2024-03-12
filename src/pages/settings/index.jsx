import React from "react";
import SettingsSidebar from "../../component/settings/SettingsSidebar";
import TermsAndCondition from "../../pages/settings/terms&condition";

function Settings() {
  return (
    <main className="w-full my-11">
      <div className="grid grid-cols-1 xl:grid-cols-12 bg-white dark:bg-darkblack-600 rounded-xl">
        <SettingsSidebar />
        <div className="py-8 px-10 col-span-9 tab-content">
          <TermsAndCondition />
        </div>
      </div>
    </main>
  );
}

export default Settings;
