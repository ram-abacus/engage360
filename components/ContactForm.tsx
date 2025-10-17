"use client";

import { useEffect } from "react";

export default function BasiqForm() {
  useEffect(() => {
    const scriptId = "hubspot-embed-script";

    function loadHubspotForm() {
      const container = document.getElementById("hubspot-form-container");
      if (!container || !(window as any).hbspt) return;

      // Clear the container to prevent duplicate forms
      container.innerHTML = "";

      (window as any).hbspt.forms.create({
        region: "na2",
        portalId: "242830238",
        formId: "040a98bd-7b7c-46a3-9ba0-db9f344b724c",
        target: "#hubspot-form-container",
      });
    }

    if (document.getElementById(scriptId)) {
      loadHubspotForm();
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.defer = true;
    script.onload = loadHubspotForm;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div id="hubspot-form-container"></div>
    </div>
  );
}
