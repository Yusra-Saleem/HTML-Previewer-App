"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import React, { useState, ChangeEvent } from "react";

// Import custom UI components from the UI directory
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Import predefined HTML content
import { portfolioHtml } from "./portfolio-html";

// Import predefined HTML content
import { predefinedHtml } from "./prededfined-Html";

// Default export of the HTMLPreviewComponent function
export default function HTMLPreviewComponent() {
  // State hooks for managing HTML code input and preview
  const [htmlCode, setHtmlCode] = useState<string>("");
  const [previewHtml, setPreviewHtml] = useState<string>("");

  // Handler to generate HTML preview
  const handlePreview = (): void => {
    setPreviewHtml(htmlCode);
  };

  // Handler to paste portfolio HTML into the textarea
  const handlePortfolioHtml = (): void => {
    setHtmlCode(portfolioHtml);
  };

  // Handler to paste portfolio HTML into the textarea
  const handlePredefinedHtml = (): void => {
    setHtmlCode(predefinedHtml);
  };

  // Handler for updating HTML code state on textarea change
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setHtmlCode(e.target.value);
  };

  // JSX return statement rendering the HTML previewer UI
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-indigo-100 text-foreground overflow-y-auto">
      {/* Center the HTML previewer card within the screen */}
      <div className="w-full max-w-5xl p-3 min-w-[310px]  rounded-lg shadow-2xl bg-slate-800 overflow-y-auto ">
        <h1 className="text-4xl text-purple-100 font-extrabold mb-4 text-center">HTML Previewer</h1>
        <p className="text-gray-300 text-semibold mb-4 text-center">
          Enter your HTML code and see the preview.
        </p>
        <div className="grid gap-4">
          {/* Textarea for entering HTML code */}
          <Textarea
            value={htmlCode}
            onChange={handleChange}
            placeholder="Enter your HTML code here..."
            className="p-4  shadow-lg rounded-lg border border-input bg-background text-foreground"
            rows={8}
          />
          {/* Buttons to generate preview and paste predefined HTML */}
          <div className="flex justify-center gap-2">
          <div className="flex">
              <Button className="bg-purple-100 text-slate-900 border-4  border-purple-300  hover:bg-gray-300 hover:border-4 hover:border-purple-300 font-sans tracking-wider font-bold" onClick={handlePredefinedHtml}>HtML Code</Button>
              </div>
              <div className="flex ">
              <Button className="bg-purple-100 text-slate-900 border-4  border-purple-300  hover:bg-gray-300 hover:border-4 hover:border-purple-300 font-sans tracking-wider font-bold" onClick={handlePortfolioHtml}>Porfolio HTML</Button>
            </div>
          </div>
          <div className="flex justify-center">
          <div className="flex">
              <Button className="bg-purple-300 text-slate-900 border-4  border-purple-300  hover:bg-gray-400  font-sans tracking-wider font-bold" onClick={handlePreview}>Generate Preview</Button>
              </div>
              </div>
          {/* Div to display the HTML preview with scroll enabled */}
          <div className="p-3 pt-0 rounded-lg border border-input bg-background text-foreground overflow-y-auto max-h-[500px] overflow-x-hidden">
            <div dangerouslySetInnerHTML={{ __html: previewHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
}
