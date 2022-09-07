export default function SetupBusinessDetails({ business }) {
  const { img, name, phone, country, timezone, endOfBusinessDay } = business;
  return (
    <div className="p-6 md:p-8">
      <div
        className="bg-mainBg 
        flex flex-col md:flex-row
        space-y-5 md:space-y-0
        md:space-x-4
        max-w-4xl mx-auto
        "
      >
        <img
          src={img}
          alt={img}
          className="border border-gray-500 shadow-md
         md:w-1/4
      "
        />
        <div
          className="flex flex-col space-y-2 md:space-y-4
      
      "
        >
          <div className="flex items-center space-x-3">
            <h2 className="text-3xl md:text-4xl font-light">{name}</h2>
            <button
              className="rounded bg-orange-500 font-semibold
          px-2 py-1
          text-xs
          "
            >
              Edit
            </button>
          </div>
          <div
            className="flex flex-wrap 
          divide-x-[2px] divide-gray-300 
         "
          >
            <DetailWrapper>
              <DetailLabel>Telephone</DetailLabel>
              <DetailValue>{phone}</DetailValue>
            </DetailWrapper>
            <DetailWrapper>
              <DetailLabel>Country</DetailLabel>
              <DetailValue>{country}</DetailValue>
            </DetailWrapper>
            <DetailWrapper>
              <DetailLabel>Timezone</DetailLabel>
              <DetailValue>{timezone}</DetailValue>
            </DetailWrapper>
            <DetailWrapper>
              <DetailLabel>End of Business Day</DetailLabel>
              <DetailValue>{endOfBusinessDay}</DetailValue>
            </DetailWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailLabel({ children }) {
  return (
    <div className="text-xs font-semibold text-gray-500 whitespace-nowrap">
      {children}
    </div>
  );
}

function DetailValue({ children }) {
  return (
    <div className="text-sm text-gray-700 whitespace-nowrap">{children}</div>
  );
}

function DetailWrapper({ children }) {
  return (
    <div className="flex flex-col space-y-1 p-3 first:pl-0">{children}</div>
  );
}
