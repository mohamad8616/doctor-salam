"use client";

import React, { memo } from "react";
import BottomBar from "./footer.bottomBar";
import TopGrid from "./footer.TopGrid";

const Footer: React.FC = () => {
  return (
    <footer
      dir="rtl"
      className="relative border-t bg-background text-foreground"
    >
      <div className="container mx-auto px-4 py-12">
        {/* TOP GRID */}
        <TopGrid />

        {/* BOTTOM BAR */}
        <BottomBar />
      </div>
    </footer>
  );
};

export default memo(Footer);
