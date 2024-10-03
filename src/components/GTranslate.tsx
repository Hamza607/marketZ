"use client";
import { useEffect } from "react";

export default function GTranslate() {
  useEffect(() => {
    window.gtranslateSettings = {
      default_language: "en",
      native_language_names: true,
      detect_browser_language: true,
      languages: ["en", "es", "nl"],
      wrapper_selector: ".gtranslate_wrapper",
      alt_flags: { en: "usa" },
    };

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="gtranslate_wrapper"></div>
    </>
  );
}
