export default function Header() {
  return (
    <header className="z-100 flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 h-[50px]">
      <img className="h-[50px] p-2" src="/header.png" alt="" />

      <button
        type="button"
        aria-label="Open profile"
        title="Profile"
        className="inline-flex items-center justify-center w-10 h-10 rounded-md p-0 bg-transparent hover:bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onClick={() => {
          // placeholder for click action
        }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8V22h19.2v-2.8c0-3.2-6.4-4.8-9.6-4.8z" />
        </svg>
      </button>
    </header>
  );
}
