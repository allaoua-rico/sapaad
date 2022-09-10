export default function SetupTopSection({ title, leftSection, rightSection }) {
  return (
    <>
      <div
        className="flex justify-between items-center
        py-4
        "
      >
        <>
          {title && (
            <h3 className="text-3xl text-[#3c9e3f] font-medium">{title}</h3>
          )}
          {leftSection && leftSection}
        </>
        <div className="">{rightSection}</div>
      </div>
      <hr className="my-5" />
    </>
  );
}
