import { Formik } from "formik";
import { useRef } from "react";
import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import SetupTopSection from "../../components/SetupPage/SetupTopSection";
import ReturnLinkButton from "../../components/shared/buttons/ReturnLinkButton";
import MainH1 from "../../components/shared/wrappers/Reports/MainH1";
import ReportToolbarLeftWrapper from "../../components/shared/wrappers/Reports/ReportToolbarLeftWrapper";

export default function ItemUpload() {
  const [{ crumbs }] = useOutletContext();
  const [filename, setFilename] = useState("second");

  const fileRef = useRef();
  const formRef = useRef();

  const handleFileInputChange = (e) => {
    const [file] = e.target.files;
    const fileSize = file.size / 1024 / 1024;
    if (fileSize > 1) {
      formRef.current?.setFieldValue("file", null);
    } else {
      formRef.current?.setFieldValue(
        "file",
        document.querySelector('input[name="file"]').files[0]
      );
    }
  };
  return (
    <div className="flex flex-col flex-1">
      <SetupTopSection
        leftSection={
          <ReportToolbarLeftWrapper>
            <ReturnLinkButton to={crumbs[crumbs.length - 2].path} />
            <MainH1>Upload Menu Items</MainH1>
          </ReportToolbarLeftWrapper>
        }
      />
      <div className="flex flex-col justify-center items-center flex-1 text-center space-y-5">
        <div>
          <div className="text-2xl font-bold mb-1">Select a CSV File</div>
          <p className="text-sm">
            Please select a CSV file containing your menu items.
          </p>
          <p className="text-sm text-gray-500">
            Not sure about the format?{" "}
            <Link
              to="/sample_menus.csv"
              target="_blank"
              className="text-blue-400"
              download
            >
              Download our sample CSV file
            </Link>{" "}
            or,{" "}
            <Link
              to="/Chef & Chef_items.csv"
              target="_blank"
              className="text-blue-400"
              download
            >
              Download all items as CSV file
            </Link>
            .
          </p>
        </div>
        <button
          onClick={() => fileRef.current.click()}
          className="h-12 max-w-[600px] w-full flex 
            border rounded shadow-inner 
            overflow-hidden
            "
        >
          <div className="flex-1 py-2 px-4 text-left">{filename}</div>
          <div className="w-28 bg-[#198fec] text-white h-full flex items-center justify-center">
            Choose a file
          </div>
        </button>
        <button className="bg-[#5bb75b] text-white py-2 px-4 rounded ">
          Upload
        </button>
      </div>
      <Formik innerRef={formRef}>
        {(props) => <form onSubmit={props.handleSubmit}></form>}
      </Formik>
      <input
        name="file"
        value=""
        autoComplete="new-password"
        ref={fileRef}
        onChange={handleFileInputChange}
        multiple={false}
        type="file"
        hidden
        accept=".csv"
      />
    </div>
  );
}
