export function displayFormikErrors(props) {
  return (
    <div>
      {props?.errors &&
        Object.keys(props?.errors)?.map((field) => {
          if (!Array.isArray(field)) {
            return (
              <div>
                <span className="text-red-500 ">{field}</span>:{" "}
                <span>{props?.errors[field]}</span>
              </div>
            );
          } else {
            return (
              <div>
                <span className="text-red-500 ">{field}</span>:{" "}
                <span>
                  {" "}
                  {props?.errors[field].map((err) => (
                    <div>{err}</div>
                  ))}
                </span>
              </div>
            );
          }
        })}
    </div>
  );
}

export function displayFormikFieldErrors(props, field) {
  const fieldErrors = props?.errors[field];
  let component = null;
  if (fieldErrors) {
    if (!Array.isArray(fieldErrors)) {
      component = (
        <div>
          <span>{props?.errors[field]}</span>
        </div>
      );
    } else {
      component = (
        <div>
          <span className="text-gray-500 ">{field}</span>:{" "}
          <span>
            {props?.errors[field].map((err) => (
              <div>{err}</div>
            ))}
          </span>
        </div>
      );
    }
  }
  return <div>{component}</div>;
}
