export default function ReportToolbarWrapper({ children }) {
  return (
    <div
      div
      className="flex flex-col items-left space-y-5 md:space-y-0
    md:flex-row md:items-center
    justify-between"
    >
      {children}
    </div>
  );
}
