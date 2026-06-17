"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";

const shareData = {
  title: "Cris Academia",
  text: "Acesse os principais links da Cris Academia.",
  url: "https://crisacademia.netlify.app/links",
};

const ShareLinksButton = () => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(shareData.url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="mt-4 flex min-h-[58px] w-full items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-base font-semibold text-white shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl"
    >
      {copied ? (
        <Check className="h-5 w-5 text-green-400" aria-hidden="true" />
      ) : (
        <Share2 className="h-5 w-5 text-blue-300" aria-hidden="true" />
      )}
      {copied ? "Link copiado" : "Compartilhar esta página"}
    </button>
  );
};

export default ShareLinksButton;
