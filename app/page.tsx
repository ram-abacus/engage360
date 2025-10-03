"use client"

import { useState } from "react"

// Brand Tokens
const BRAND_BLUE = "#004bab" // Primary
const BRAND_ORANGE = "#FFA500" // Accent

// Simple SVG Icons as components
const CheckIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

const ShieldIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
)

const MapPinIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
)

const CpuIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M13 7H7v6h6V7z" />
    <path
      fillRule="evenodd"
      d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z"
      clipRule="evenodd"
    />
  </svg>
)

const QrCodeIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1h-1z"
      clipRule="evenodd"
    />
    <path d="M11 4a1 1 0 10-2 0v1a1 1 0 002 0V4zM10 7a1 1 0 011 1v1h2a1 1 0 110 2h-3a1 1 0 01-1-1V8a1 1 0 011-1zM16 12a1 1 0 100-2h-3a1 1 0 100 2h3zM12 13a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zM16 16a1 1 0 100-2h-3a1 1 0 100 2h3zM16 18a1 1 0 100-2h-1a1 1 0 100 2h1zM13 18a1 1 0 100-2h-1a1 1 0 100 2h1z" />
  </svg>
)

const PieChartIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
  </svg>
)

const ZapIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
      clipRule="evenodd"
    />
  </svg>
)

const PlayIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
      clipRule="evenodd"
    />
  </svg>
)

const TrendingUpIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
      clipRule="evenodd"
    />
  </svg>
)

const UsersIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
  </svg>
)

const FingerprintIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6 6 0 0016 11a1 1 0 112 0 8 8 0 00-10.248-7.688 1 1 0 01-.09 1.647zM3.5 7.5A1 1 0 014 8.5a4 4 0 108 0 1 1 0 112 0 6 6 0 11-12 0 1 1 0 01.5-1zm6.5 3a1 1 0 100-2 1 1 0 000 2z"
      clipRule="evenodd"
    />
  </svg>
)

const MessageSquareIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
      clipRule="evenodd"
    />
  </svg>
)

const ListChecksIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
)

const MonitorPlayIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M3 4a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V4zm12 12V4H5v12h10z"
      clipRule="evenodd"
    />
    <path d="M8 8a1 1 0 011.664-.748l2 1.5a1 1 0 010 1.496l-2 1.5A1 1 0 018 11V8z" />
  </svg>
)

const StarIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const PuzzleIcon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a2 2 0 012 2v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a2 2 0 01-2 2h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H4a2 2 0 01-2-2v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H3a1 1 0 01-1-1V7a2 2 0 012-2h3a1 1 0 001-1v-.5z" />
  </svg>
)

const Link2Icon = ({ className = "w-5 h-5", style = {} }) => (
  <svg className={className} style={style} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l-3 3a4 4 0 00-5.656 5.656l1.5-1.5a1 1 0 101.414 1.414l1.5-1.5a2 2 0 11-2.828-2.828l3-3z"
      clipRule="evenodd"
    />
  </svg>
)

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-white/70 text-slate-800 ring-1 ring-black/5">
    {children}
  </span>
)

const Stat = ({ value, label }) => (
  <div className="flex flex-col items-start gap-1">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
)

const FeatureItem = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl p-6 ring-1 ring-slate-200 hover:ring-slate-300 bg-white/80 backdrop-blur-sm transition-all shadow-sm hover:shadow-md">
    <div className="flex items-center gap-3 mb-3">
      <div className="rounded-xl p-2" style={{ backgroundColor: BRAND_BLUE + "10" }}>
        <Icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
      </div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-sm text-slate-600 leading-6">{children}</p>
  </div>
)

const Benefit = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckIcon className="w-5 h-5 mt-0.5" style={{ color: BRAND_ORANGE }} />
    <p className="text-slate-700">{children}</p>
  </div>
)

const FaqItem = ({ q, a }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-slate-200 py-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between gap-4">
        <span className="font-medium text-slate-900">{q}</span>
        <span className="text-slate-500 text-xl">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="mt-3 text-slate-600 leading-7">{a}</p>}
    </div>
  )
}

const LeadForm = () => (
  <div className="mautic-form-container relative z-30">
    <style jsx>{`
      .mauticform_wrapper { max-width: 600px; margin: 10px auto; position: relative; z-index: 30; }
      .mauticform-innerform { position: relative; z-index: 30; }
      .mauticform-post-success {}
      .mauticform-name { font-weight: bold; font-size: 1.5em; margin-bottom: 3px; }
      .mauticform-description { margin-top: 2px; margin-bottom: 10px; }
      .mauticform-error { margin-bottom: 10px; color: red; }
      .mauticform-message { margin-bottom: 10px; color: green; }
      .mauticform-row { display: block; margin-bottom: 20px; position: relative; z-index: 30; }
      .mauticform-label { font-size: 1.1em; display: block; font-weight: bold; margin-bottom: 5px; }
      .mauticform-row.mauticform-required .mauticform-label:after { color: #e32; content: " *"; display: inline; }
      .mauticform-helpmessage { display: block; font-size: 0.9em; margin-bottom: 3px; }
      .mauticform-errormsg { display: block; color: red; margin-top: 2px; }
      .mauticform-selectbox, .mauticform-input, .mauticform-textarea { 
        width: 100%; 
        padding: 0.75rem; 
        border: 1px solid #e2e8f0; 
        background: #fff; 
        border-radius: 0.75rem; 
        box-sizing: border-box;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        position: relative;
        z-index: 30;
        pointer-events: auto;
      }
      .mauticform-input:focus, .mauticform-textarea:focus {
        outline: none;
        border-color: #004bab;
        box-shadow: 0 0 0 2px rgba(0, 75, 171, 0.1);
        z-index: 31;
      }
      .mauticform-checkboxgrp-row {}
      .mauticform-checkboxgrp-label { font-weight: normal; }
      .mauticform-checkboxgrp-checkbox {}
      .mauticform-radiogrp-row {}
      .mauticform-radiogrp-label { font-weight: normal; }
      .mauticform-radiogrp-radio {}
      .mauticform-button-wrapper .mauticform-button.btn-ghost, .mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-ghost { 
        color: #ffffff;
        background-color: #004bab;
        border-color: #004bab;
        width: 100%;
        padding: 0.75rem;
        border-radius: 0.75rem;
        font-weight: 600;
        font-size: 0.875rem;
        transition: all 0.2s ease;
        position: relative;
        z-index: 30;
        pointer-events: auto;
        cursor: pointer;
      }
      .mauticform-button-wrapper .mauticform-button, .mauticform-pagebreak-wrapper .mauticform-pagebreak { 
        display: inline-block;
        margin-bottom: 0;
        font-weight: 600;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        background-image: none;
        border: 1px solid transparent;
        white-space: nowrap;
        padding: 0.75rem;
        font-size: 0.875rem;
        line-height: 1.3856;
        border-radius: 0.75rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 100%;
        position: relative;
        z-index: 30;
        pointer-events: auto;
      }
      .mauticform-button-wrapper .mauticform-button.btn-ghost:hover {
        background-color: #003d8f;
        border-color: #003d8f;
      }
      .mauticform-button-wrapper .mauticform-button.btn-ghost[disabled], .mauticform-pagebreak-wrapper .mauticform-pagebreak.btn-ghost[disabled] { 
        background-color: #6b7280; 
        border-color: #6b7280; 
        opacity: 0.75; 
        cursor: not-allowed; 
      }
      .mauticform-pagebreak-wrapper .mauticform-button-wrapper { display: inline; }
      .mauticform-field-hidden { display: none; }
      
      .mautic-form-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 0.75rem;
        position: relative;
        z-index: 30;
      }
      .mautic-form-full-width {
        grid-column: 1 / -1;
      }
      
      @media (max-width: 640px) {
        .mautic-form-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>

    <div id="mauticform_wrapper_quickrewardsbasiq360" className="mauticform_wrapper">
      <form
        autoComplete="false"
        role="form"
        method="post"
        action="https://mautic.abacusdesk.co.in/form/submit?formId=13"
        id="mauticform_quickrewardsbasiq360"
        data-mautic-form="quickrewardsbasiq360"
        encType="multipart/form-data"
      >
        <div className="mauticform-error" id="mauticform_quickrewardsbasiq360_error"></div>
        <div className="mauticform-message" id="mauticform_quickrewardsbasiq360_message"></div>

        <div className="mauticform-innerform">
          <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
            <div className="mautic-form-grid">
              <div
                id="mauticform_quickrewardsbasiq360_f_name"
                className="mauticform-row mauticform-text mauticform-field-1 mauticform-required"
                data-validate="f_name"
                data-validation-type="text"
              >
                <input
                  type="text"
                  name="mauticform[f_name]"
                  defaultValue=""
                  id="mauticform_input_quickrewardsbasiq360_f_name"
                  placeholder="Full Name*"
                  className="mauticform-input"
                  required
                />
                <span className="mauticform-errormsg" style={{ display: "none" }}>
                  This field is required
                </span>
              </div>

              <div
                id="mauticform_quickrewardsbasiq360_email"
                className="mauticform-row mauticform-email mauticform-field-2 mauticform-required"
                data-validate="email"
                data-validation-type="email"
              >
                <input
                  type="email"
                  name="mauticform[email]"
                  defaultValue=""
                  id="mauticform_input_quickrewardsbasiq360_email"
                  placeholder="Work Email*"
                  className="mauticform-input"
                  required
                />
                <span className="mauticform-errormsg" style={{ display: "none" }}>
                  This field is required
                </span>
              </div>

              <div
                id="mauticform_quickrewardsbasiq360_phone"
                className="mauticform-row mauticform-tel mauticform-field-3 mauticform-required"
                data-validate="phone"
                data-validation-type="tel"
              >
                <input
                  type="tel"
                  name="mauticform[phone]"
                  defaultValue=""
                  id="mauticform_input_quickrewardsbasiq360_phone"
                  placeholder="Phone*"
                  className="mauticform-input"
                  required
                />
                <span className="mauticform-errormsg" style={{ display: "none" }}></span>
              </div>

              <div
                id="mauticform_quickrewardsbasiq360_company"
                className="mauticform-row mauticform-text mauticform-field-4"
              >
                <input
                  type="text"
                  name="mauticform[company]"
                  defaultValue=""
                  id="mauticform_input_quickrewardsbasiq360_company"
                  placeholder="Company"
                  className="mauticform-input"
                />
                <span className="mauticform-errormsg" style={{ display: "none" }}></span>
              </div>

              <div
                id="mauticform_quickrewardsbasiq360_submit"
                className="mauticform-row mauticform-button-wrapper mauticform-field-6 mautic-form-full-width"
              >
                <button
                  className="btn btn-ghost mauticform-button"
                  name="mauticform[submit]"
                  value="1"
                  id="mauticform_input_quickrewardsbasiq360_submit"
                  type="submit"
                >
                  Get a Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        <input type="hidden" name="mauticform[formId]" id="mauticform_quickrewardsbasiq360_id" value="13" />
        <input type="hidden" name="mauticform[return]" id="mauticform_quickrewardsbasiq360_return" value="" />
        <input
          type="hidden"
          name="mauticform[formName]"
          id="mauticform_quickrewardsbasiq360_name"
          value="quickrewardsbasiq360"
        />
      </form>
    </div>

    <p className="text-xs text-slate-500 mt-3">
      By submitting, you agree to be contacted about Engage360. Your data is protected and used only for demo
      coordination.
    </p>
  </div>
)

export default function Engage360Landing() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
              alt="Basiq360 Logo"
              className="h-8 w-auto"
            />
            <div className="" />
            {/* <span className="font-semibold">Engage360</span> */}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="#features" className="px-3 py-1.5 rounded-lg text-sm hover:bg-slate-100">
              Features
            </a>
            <a href="#why-us" className="px-3 py-1.5 rounded-lg text-sm hover:bg-slate-100">
              Why Us?
            </a>
            <a href="#security" className="px-3 py-1.5 rounded-lg text-sm hover:bg-slate-100">
              Security
            </a>
            <a href="#faqs" className="px-3 py-1.5 rounded-lg text-sm hover:bg-slate-100">
              FAQs
            </a>
          </div>
          <a
            href="#demo"
            className="rounded-xl px-4 py-2 font-semibold text-white shadow"
            style={{ backgroundColor: BRAND_ORANGE }}
          >
            Get Demo
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `radial-gradient(1200px 600px at 10% -10%, ${BRAND_BLUE}15, transparent), radial-gradient(1000px 500px at 120% 10%, ${BRAND_ORANGE}20, transparent)`,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <Pill>App-less rollout</Pill>
              <Pill>Instant UPI rewards</Pill>
              <Pill>Real-time inventory</Pill>
              <Pill>Product authentication</Pill>
              <Pill>Customer engagement</Pill>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in">
              Reward Smarter. Authenticate Products. Engage Customers.
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              A single smart platform for all brands selling direct to customers: real‑time inventory tracking, product
              authenticity checks, and instant UPI rewards to build lasting loyalty — no app required.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setShowVideo(true)}
                className="relative z-20 inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
                style={{ backgroundColor: BRAND_BLUE }}
              >
                <PlayIcon className="w-4 h-4" /> Watch the Demo Video
              </button>
              <a
                href="#demo"
                className="relative z-20 inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold border hover:bg-slate-50 transition-all cursor-pointer"
                style={{ borderColor: BRAND_BLUE, color: BRAND_BLUE }}
              >
                Get a Live Demo
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat value="90%+" label="Customer/retailer acceptance" />
              <Stat value="25–30%" label="Sales uplift with rewards" />
              <Stat value="0" label="App downloads required" />
            </div>
          </div>
          <div className="relative z-20 bg-white rounded-2xl p-6 shadow-xl ring-1 ring-slate-200">
            <h3 id="demo" className="text-xl font-semibold mb-4">
              See Engage360 in Action
            </h3>
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="py-12" id="features">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Why Brands Struggle to Scale Customer Loyalty</h2>
            <div className="space-y-3 text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <p>
                  <strong>42% of inventory data</strong> is delayed due to manual or partner‑reported tracking.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <p>
                  Traditional coupon schemes see <strong>&lt;30% redemption</strong>, creating poor engagement.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <p>
                  Counterfeits erode trust when products <strong>can't be verified</strong> easily.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">•</span>
                <p>
                  Lack of direct feedback loops limits <strong>repeat purchases</strong> and advocacy.
                </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FeatureItem icon={QrCodeIcon} title="App‑less onboarding">
              Customers and retailers join via QR or OTP—no downloads, zero friction.
            </FeatureItem>
            <FeatureItem icon={PieChartIcon} title="Inventory visibility">
              Track stock movement in real‑time across distributors/retailers.
            </FeatureItem>
            <FeatureItem icon={ZapIcon} title="Instant UPI rewards">
              Direct transfers—no delays, no friction, high satisfaction.
            </FeatureItem>
            <FeatureItem icon={MapPinIcon} title="Fraud‑proof redemption">
              Geo‑location capture + OTP verification on every claim.
            </FeatureItem>
          </div>
        </div>
      </section>

      <section id="why-us" className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">Why Choose Engage360? — Three Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureItem icon={TrendingUpIcon} title="Engage360 (Sales & Loyalty)">
              Engage customers and channel partners with <strong>instant UPI rewards</strong>, personalized offers, and
              milestones that drive repeat purchases.
            </FeatureItem>
            <FeatureItem icon={FingerprintIcon} title="Product Authentication (Trust)">
              Secure QR/unique codes verify genuineness at point of scan. <strong>Stop counterfeits</strong> and protect
              brand equity.
            </FeatureItem>
            <FeatureItem icon={MessageSquareIcon} title="Customer Engagement (Retention)">
              Collect first‑party data, run feedback & NPS, and trigger <strong>targeted campaigns</strong> based on
              behavior.
            </FeatureItem>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <FeatureItem icon={CpuIcon} title="No Heavy Setup">
              Zero installation cost, <strong>pay‑as‑you‑go</strong> model.
            </FeatureItem>
            <FeatureItem icon={UsersIcon} title="High Adoption Rates">
              UPI‑based flows enjoy <strong>90%+ acceptance</strong>.
            </FeatureItem>
            <FeatureItem icon={ListChecksIcon} title="Actionable Dashboards">
              Sales, inventory & engagement insights for <strong>smarter planning</strong>.
            </FeatureItem>
          </div>
        </div>
      </section>

      <section className="py-12" id="benefits">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm bg-white">
              <div className="aspect-video bg-slate-100">
                <button
                  onClick={() => setShowVideo(true)}
                  className="group relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1600&auto=format&fit=crop"
                    alt="Product demo thumbnail"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors" />
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-white font-semibold shadow-lg"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    <MonitorPlayIcon className="w-5 h-5" /> Watch Product Demo
                  </span>
                </button>
              </div>
              <div className="p-4 flex items-center justify-between text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4" style={{ color: BRAND_ORANGE }} /> Real case walkthrough
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUpIcon className="w-4 h-4" style={{ color: BRAND_BLUE }} /> ROI in weeks
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-6 md:p-8 ring-1 ring-slate-200 bg-white shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://dummyimage.com/64x64/004bab/ffffff&text=HI"
                  alt="Client logo"
                  className="w-10 h-10 rounded-md ring-1 ring-slate-200"
                />
                <div>
                  <h4 className="font-semibold">Beauty & Personal Care • India</h4>
                  {/* <p className="text-sm text-slate-500">Beauty & Personal Care • India</p> */}
                </div>
              </div>
              <p className="text-slate-700 leading-7">
                "Engage360 helped us onboard retailers without an app, verify product authenticity at scan, and reward
                instantly via UPI. Participation doubled and our demand planning became sharper."
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="rounded-xl p-4 ring-1 ring-slate-200 bg-slate-50">
                  <div className="text-2xl font-semibold">2×</div>
                  <div className="text-xs text-slate-600">Participation</div>
                </div>
                <div className="rounded-xl p-4 ring-1 ring-slate-200 bg-slate-50">
                  <div className="text-2xl font-semibold">-18%</div>
                  <div className="text-xs text-slate-600">Stock-outs</div>
                </div>
                <div className="rounded-xl p-4 ring-1 ring-slate-200 bg-slate-50">
                  <div className="text-2xl font-semibold">25–30%</div>
                  <div className="text-xs text-slate-600">Sales uplift</div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill>App-less QR/OTP</Pill>
                <Pill>Product Authentication</Pill>
                <Pill>Instant UPI Rewards</Pill>
                <Pill>Inventory Visibility</Pill>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`https://dummyimage.com/48x48/ffa500/ffffff&text=${i}`}
                    alt="Logo"
                    className="w-8 h-8 rounded"
                  />
                  <div className="font-medium">Case Study {i}</div>
                </div>
                <p className="text-sm text-slate-600">
                  Short teaser about how Engage360 drove measurable outcomes across rewards, authentication, and
                  engagement.
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-600">
                  <UsersIcon className="w-4 h-4" /> 500+ scans • <TrendingUpIcon className="w-4 h-4" /> 22% uplift
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">Who We Work With</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="rounded-2xl p-6 ring-1 ring-slate-200">
              <h4 className="font-semibold mb-2">FMCG & CPG</h4>
              <p className="text-sm text-slate-600">High‑velocity products with wide distribution.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-slate-200">
              <h4 className="font-semibold mb-2">Electronics & Appliances</h4>
              <p className="text-sm text-slate-600">Warranty‑led, service‑heavy categories.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-slate-200">
              <h4 className="font-semibold mb-2">Apparel & Lifestyle</h4>
              <p className="text-sm text-slate-600">Seasonal demand with loyalty cycles.</p>
            </div>
            <div className="rounded-2xl p-6 ring-1 ring-slate-200">
              <h4 className="font-semibold mb-2">Pharma & Healthcare</h4>
              <p className="text-sm text-slate-600">Track authenticity & patient programs.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Security & Reliability You Can Count On</h3>
            <div className="space-y-3">
              <Benefit>Bank‑grade security for UPI transfers.</Benefit>
              <Benefit>Geo‑verified rewards and scan locations prevent fraud.</Benefit>
              <Benefit>Compliance‑ready reporting for audits.</Benefit>
              <Benefit>Built for scale across multi‑tier networks.</Benefit>
            </div>
          </div>
          <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white/70">
            <div className="flex items-center gap-3 mb-3">
              <ShieldIcon className="w-6 h-6" style={{ color: BRAND_BLUE }} />
              <h4 className="font-semibold">Fraud‑Proof Redemption & Auth</h4>
            </div>
            <p className="text-sm text-slate-600 leading-6">
              Every reward and product scan is OTP‑verified and geo‑tagged. Create policy‑based limits and automated
              checks to prevent misuse.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
              <MapPinIcon className="w-4 h-4" />
              <span>Location capture on each claim/scan</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Plug into your stack</h3>
              <p className="text-sm text-slate-600 mb-4">
                Engage360 works with your CRM, ERP, and marketing tools so data flows where you need it.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "SAP", src: "SAP.jpeg" },
                  { name: "Zoho", src: "zoho.png" },
                  { name: "HubSpot", src: "hubspot.png" },
                  { name: "Salesforce", src: "salesforce.png" },
                  { name: "Tally", src: "tally.png" },
                  { name: "MS Dynamics", src: "ms365.jpeg" },
                ].map(({ name, src }) => (
                  <div
                    key={name}
                    className="h-16 rounded-xl ring-1 ring-slate-200 flex items-center justify-center bg-slate-50"
                  >
                    <img
                      src={src}
                      alt={name}
                      className="max-h-10 object-contain clientImg"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4">How data moves</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold text-white"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    1
                  </span>
                  <p className="text-sm text-slate-700">
                    Scan QR → verify via OTP → optional product auth event created
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold text-white"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    2
                  </span>
                  <p className="text-sm text-slate-700">Trigger reward via UPI and log transaction with geo + time</p>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-1 rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold text-white"
                    style={{ backgroundColor: BRAND_BLUE }}
                  >
                    3
                  </span>
                  <p className="text-sm text-slate-700">Sync customer & event data to CRM/ERP and marketing journeys</p>
                </li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-2">
                <Pill>Webhooks</Pill>
                <Pill>REST APIs</Pill>
                <Pill>Batch CSV</Pill>
              </div>
            </div>

            <div className="rounded-2xl p-6 ring-1 ring-slate-200 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Future readiness</h3>
              <div className="space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <PuzzleIcon className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                  <p>Distributor‑level scanning & full SaaS admin (beta)</p>
                </div>
                <div className="flex items-start gap-3">
                  <Link2Icon className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                  <p>Native connectors for leading CRMs & ERPs</p>
                </div>
                <div className="flex items-start gap-3">
                  <CpuIcon className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                  <p>IoT beacons & predictive analytics for demand planning</p>
                </div>
              </div>
              <div className="mt-4 rounded-xl bg-slate-50 ring-1 ring-slate-200 p-4">
  <div className="text-xs text-slate-500 mb-3">Real-time security metrics</div>
  <div className="grid grid-cols-2 gap-3">
    <div className="flex flex-col">
      <span className="text-lg font-semibold text-slate-900">99.9%</span>
      <span className="text-xs text-slate-600">Uptime guarantee</span>
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-semibold text-slate-900">&lt; 2hrs</span>
      <span className="text-xs text-slate-600">Response time</span>
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-semibold text-slate-900">24/7</span>
      <span className="text-xs text-slate-600">Monitoring</span>
    </div>
    <div className="flex flex-col">
      <span className="text-lg font-semibold text-slate-900">5000+</span>
      <span className="text-xs text-slate-600">Sites protected</span>
    </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">FAQs</h3>
          <div className="rounded-2xl p-4 ring-1 ring-slate-200 bg-white">
            <FaqItem
              q="Do customers or retailers need to download an app?"
              a="No. Engage360 is 100% app‑less. Users scan a QR, verify via OTP, and receive UPI rewards instantly."
            />
            <FaqItem
              q="Can we authenticate products with the same QR?"
              a="Yes. Unique codes validate authenticity at the point of scan and can also trigger rewards or feedback flows."
            />
            <FaqItem
              q="How much setup cost is involved?"
              a="Zero. We operate on a flexible, usage‑based model with enterprise options as you scale."
            />
            <FaqItem
              q="How fast can we get started?"
              a="Most brands launch within 2–3 weeks after onboarding and configuration."
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div
            className="rounded-3xl p-8 md:p-10 text-center text-white shadow-xl"
            style={{ background: `linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_ORANGE})` }}
          >
            <h3 className="text-3xl font-semibold">Stop losing customers to look‑alikes and competitors.</h3>
            <p className="mt-2 text-white/90">Authenticate products. Reward instantly. Engage continuously.</p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setShowVideo(true)}
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold bg-white text-slate-900"
              >
                <PlayIcon className="w-4 h-4" /> Watch the Demo Video
              </button>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2 font-semibold ring-1 ring-white/70"
              >
                Get a Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://cdn.prod.website-files.com/682583f9a957c5ef54e23095/6825c66c6004fd92ca718d0f_BASIQ.avif"
              alt="Basiq360 Logo"
              className="h-7 w-auto"
            />
            <span className="text-sm text-slate-600">© {new Date().getFullYear()} Basiq360. All rights reserved.</span>
          </div>
          <div className="text-sm text-slate-600">Privacy • Terms • Security</div>
        </div>
      </footer>

      {showVideo && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden ring-1 ring-white/10"
      onClick={(e) => e.stopPropagation()}
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/QqsOdJGPRck?autoplay=1&rel=0&loop=1&playlist=QqsOdJGPRck"
        title="React Dashboard Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
)}
    </div>
  )
}
