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
            <h1 className="text-3xl text-[#3c9e3f] font-medium">{title}</h1>
          )}
          {leftSection && leftSection}
        </>
        <div>{rightSection}</div>
      </div>
      <hr className="my-5" />
    </>
  );
}
