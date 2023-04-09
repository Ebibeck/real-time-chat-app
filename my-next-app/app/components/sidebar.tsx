import Header from "./header";

export default function Sidebar() {
  return (
    <div className="bg-gray-50 flex flex-col text-white p-1 h-full w-full border">
      <div className="h-12 w-full flex items-start justify-start">
        <span className="text-gray-600 font-mono font-semibold text-xl">
          CHAT APP
        </span>
      </div>
        <Header />
    </div>
  );
}
