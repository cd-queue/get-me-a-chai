import React from "react";

const page = () => {
  return (
    <>
      <div className="text-white  container mx-auto py-14">
        <h1 className=" text-center font-bold text-2xl">
          Login/Signup to get your fans support you
        </h1>

<div className="flex flex-col items-center justify-center gap-2 p-10">

  {/* Google */}
  <button
    type="button"
    className="flex w-full max-w-xs items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  >
    <svg className="mr-2 h-6 w-6 shrink-0" viewBox="-0.5 0 48 48" fill="none">
      <path d="M9.827 24c0-1.524.253-2.986.705-4.356l-7.909-6.04A23.7 23.7 0 0 0 .214 24c0 3.737.867 7.261 2.406 10.388l7.905-6.051A14.3 14.3 0 0 1 9.827 24" fill="#FBBC05"/>
      <path d="M23.714 10.133c3.311 0 6.302 1.174 8.652 3.094L39.202 6.4C35.036 2.773 29.695.533 23.714.533c-9.287 0-17.269 5.311-21.09 13.071l7.908 6.04c1.823-5.532 7.018-9.511 13.182-9.511" fill="#EB4335"/>
      <path d="M23.714 37.867c-6.165 0-11.36-3.979-13.182-9.511l-7.909 6.039c3.822 7.761 11.803 13.072 21.09 13.072 5.732 0 11.204-2.035 15.312-5.849l-7.507-5.803c-2.118 1.335-4.785 2.052-7.804 2.052" fill="#34A853"/>
      <path d="M46.145 24c0-1.387-.213-2.88-.534-4.267H23.714V28.8h12.604c-.63 3.091-2.346 5.468-4.801 7.014l7.508 5.803C43.339 37.614 46.145 31.649 46.145 24" fill="#4285F4"/>
    </svg>
    <span>Continue with Google</span>
  </button>

  {/* LinkedIn */}
  <button
    type="button"
    className="flex w-full max-w-xs items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  >
    <svg className="mr-2 h-6 w-6 shrink-0" viewBox="0 0 44 44" fill="#007EBB">
      <path d="M44 40V24.89c0-8.42-4.79-12.33-10.88-12.33-4.91 0-7.99 2.66-8.56 4.53v-4.27h-9.63c.12 2.26 0 27.18 0 27.18h9.63V25.3c0-.82-.04-1.64.21-2.22.66-1.63 2.09-3.33 4.65-3.33 3.35 0 4.87 2.52 4.87 6.2V40H44ZM8.41 9.43c3.22 0 5.23-2.08 5.23-4.71C13.58 2.03 11.63 0 8.47 0 5.31 0 3.24 2.03 3.24 4.72c0 2.63 2.01 4.71 5.12 4.71h.05ZM3.11 12.82h8.58V40H3.11V12.82Z" transform="translate(-1 0)"/>
    </svg>
    <span>Continue with LinkedIn</span>
  </button>

  {/* Twitter */}
  <button
    type="button"
    className="flex w-full max-w-xs items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  >
    <svg className="mr-2 h-6 w-6 shrink-0" viewBox="0 0 48 48" fill="#00AAEC">
      <path d="M348 168.735c-1.764.803-3.663 1.346-5.655 1.589 2.034-1.248 3.595-3.227 4.33-5.584-1.904 1.156-4.009 1.996-6.257 2.447-1.792-1.962-4.353-3.187-7.187-3.187-5.435 0-9.844 4.521-9.844 10.098 0 .791.084 1.56.253 2.299-8.185-.422-15.439-4.438-20.299-10.554-.848 1.496-1.333 3.233-1.333 5.082 0 3.502 1.738 6.593 4.381 8.404-1.612-.049-3.134-.508-4.463-1.26v.124c0 4.894 3.395 8.977 7.903 9.901a10.2 10.2 0 0 1-2.595.355c-.634 0-1.254-.06-1.854-.179 1.253 4.01 4.888 6.931 9.198 7.009-3.37 2.71-7.618 4.325-12.23 4.325-.794 0-1.579-.047-2.35-.139 4.358 2.86 9.537 4.533 15.095 4.533 18.116 0 28.019-15.385 28.019-28.73 0-.439-.008-.878-.025-1.309 1.924-1.425 3.595-3.202 4.911-5.227" transform="translate(-300 -164)"/>
    </svg>
    <span>Continue with Twitter</span>
  </button>

  {/* Facebook */}
  <button
    type="button"
    className="flex w-full max-w-xs items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  >
    <svg className="mr-2 h-6 w-6 shrink-0" viewBox="0 0 48 48" fill="#4460A0">
      <path d="M225.638 208h-22.989a2.65 2.65 0 0 1-2.649-2.649v-42.702a2.65 2.65 0 0 1 2.649-2.649h42.702a2.65 2.65 0 0 1 2.649 2.649v42.702a2.65 2.65 0 0 1-2.649 2.649h-12.232v-18.588h6.239l.934-7.244h-7.173v-4.625c0-2.097.582-3.527 3.59-3.527h3.836v-6.479a39 39 0 0 0-5.59-.285c-5.531 0-9.317 3.376-9.317 9.576v5.342h-6.255v7.244h6.255V208Z" transform="translate(-200 -160)"/>
    </svg>
    <span>Continue with Facebook</span>
  </button>

  {/* GitHub */}
  <button
    type="button"
    className="flex w-full max-w-xs items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  >
    <svg className="mr-2 h-6 w-6 shrink-0" viewBox="0 0 73 73" fill="none">
      <rect x="1" y="1" width="71" height="71" rx="14" fill="#000"/>
      <path d="M58.3 21.43C55.9 17.3 52.63 14.03 48.49 11.62 44.36 9.2 39.85 8 34.96 8c-4.89 0-9.4 1.2-13.53 3.62-4.13 2.41-7.4 5.68-9.81 9.81C9.2 25.56 8 30.07 8 34.96c0 5.88 1.71 11.16 5.14 15.85 3.43 4.69 7.86 7.94 13.29 9.74.63.12 1.1.04 1.4-.25.31-.28.46-.63.46-1.05v-3.02c-.27.06-.54.1-.81.12-.51.09-1.16.13-1.95.12-.78-.01-1.6-.09-2.44-.25-.84-.15-1.63-.5-2.35-1.05-.73-.55-1.24-1.27-1.55-2.16l-.35-.81c-.23-.54-.6-1.13-1.1-1.79-.5-.65-1.01-1.1-1.53-1.33l-.25-.18c-.16-.12-.32-.26-.46-.42-.14-.16-.25-.33-.32-.49-.07-.16-.01-.3.18-.4.19-.11.53-.16 1.02-.16l.7.1c.47.1 1.05.37 1.74.84.69.47 1.26 1.08 1.7 1.83.54.96 1.19 1.69 1.95 2.19.76.5 1.53.75 2.3.75s1.44-.06 2-.18c.56-.12 1.09-.29 1.58-.53.21-1.57.78-2.77 1.72-3.61-1.33-.14-2.53-.35-3.6-.63-1.06-.28-2.16-.74-3.3-1.37-1.13-.63-2.07-1.42-2.82-2.35-.75-.94-1.36-2.17-1.84-3.69-.48-1.52-.72-3.28-.72-5.27 0-2.83.92-5.24 2.77-7.23-.87-2.13-.79-4.52.24-7.16.68-.21 1.69-.05 3.02.47 1.33.53 2.31.98 2.93 1.35.62.37 1.12.69 1.49.95 2.18-.61 4.42-.91 6.74-.91 2.32 0 4.57.3 6.74.91l1.33-.84c.91-.56 1.99-1.08 3.23-1.55 1.24-.47 2.19-.6 2.84-.39 1.05 2.64 1.15 5.03.28 7.16 1.85 1.99 2.78 4.4 2.78 7.23 0 1.99-.24 3.75-.72 5.28-.48 1.52-1.09 2.75-1.85 3.69-.76.94-1.7 1.73-2.84 2.36-1.13.63-2.23 1.09-3.3 1.37-1.06.28-2.26.49-3.59.63 1.06 1.05 1.62 2.71 1.62 4.98v7.41c0 .42.15.77.44 1.05.29.28.75.36 1.38.24 5.43-1.8 9.86-5.05 13.29-9.74 3.43-4.69 5.14-9.98 5.14-15.85 0-4.89-1.21-9.4-3.62-13.53Z" fill="#fff"/>
    </svg>
    <span>Continue with Github</span>
  </button>

  {/* Apple */}
  <button
    type="button"
    className="flex w-full max-w-xs items-center rounded-lg border border-gray-300 bg-white px-6 py-2 text-sm font-medium text-gray-800 shadow-md transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
  >
    <svg className="mr-2 h-6 w-6 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.57 2.19c.73-.84 1.22-2.02 1.09-3.19-1.05.04-2.32.67-3.08 1.51-.68.75-1.27 1.95-1.11 3.1 1.17.09 2.37-.57 3.1-1.42ZM15.2 9.62c.03 3.03 2.77 4.03 2.8 4.05-.02.07-.44 1.44-1.45 2.85-.87 1.22-1.77 2.43-3.2 2.46-1.4.02-1.85-.8-3.45-.8s-2.1.77-3.42.82c-1.37.05-2.42-1.32-3.3-2.53-1.8-2.48-3.16-7.02-1.32-10.08.91-1.52 2.55-2.48 4.32-2.5 1.35-.03 2.62.87 3.44.87.82 0 2.37-1.08 4-0.92.68.03 2.59.27 3.82 1.98-.1.06-2.28 1.27-2.25 3.8Z"/>
    </svg>
    <span>Continue with Apple</span>
  </button>
</div>
      </div>
    </>
  );
};

export default page;
