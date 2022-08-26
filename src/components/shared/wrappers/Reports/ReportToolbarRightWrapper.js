export default function ReportToolbarRightWrapper({ children }) {
  return (
    <div className="flex justify-end flex-wrap 
    space-x-2 space-y-4 md:space-y-0">
      {children}
    </div>
  );
}
