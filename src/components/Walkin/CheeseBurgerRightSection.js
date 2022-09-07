import RadiosGroup from "../shared/utils/RadiosGroup";
import {
  createRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CheckboxesGroup from "../shared/utils/CheckboxesGroup";
import FormObserver from "../shared/utils/FormObserver";
import Scroll from "react-scroll";
import { displayFormikFieldErrors, RIAL } from "../../utils/functions";

const CheeseBurgerRightSection = forwardRef(
  ({ sections, setElementsOffsetTops, setRSScrollTop, formik }, ref) => {
    const [values, setValues] = useState(null);
    const [errors, setErrors] = useState(null);
    const setChoices = (sectionName, selected) =>
      formik.setFieldValue(sectionName, selected);

    // Scrolling
    const elementsRefs = useRef(sections.map(() => createRef()));
    var scroll = Scroll.animateScroll;
    useImperativeHandle(ref, () => ({
      scrollBy(px) {
        scroll.scrollMore(px, {
          containerId: "container",
          duration: 250,
          delay: 0,
        });
      },
      scrollToEl(px) {
        console.log(px);
        scroll.scrollTo(px, {
          containerId: "container",
          duration: 250,
          delay: 0,
        });
      },
    }));
    const handleScroll = (e) => setRSScrollTop(e.currentTarget.scrollTop);
    const containerRef = useRef();
    useEffect(() => {
      setElementsOffsetTops(
        elementsRefs.current?.map((ref) => ref.current?.offsetTop)
      );
      setRSScrollTop(containerRef.current?.offsetTop);
    }, []);

    return (
      <div className="relative">
        <div
          id="container"
          onScroll={handleScroll}
          ref={containerRef}
          className="text-sm divide-y-2 
              px-4 py-1 relative
              overflow-y-auto max-h-[450px] h-full scrollbar-hide
            "
        >
          <FormObserver setValues={setValues} setErrors={setErrors} />
          {sections.map((sec, index) => (
            <div className="py-8" ref={elementsRefs.current[index]}>
              <div className="flex justify-between">
                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-gray-500">
                    {sec.name}
                  </h2>
                  <div className="text-gray-500 text-base">
                    {sec.maxChoices == 1
                      ? "Please choose 1."
                      : "Please choose maximum of 3."}
                  </div>
                  {displayFormikFieldErrors(formik, sec.name) && (
                    <div className="flex items-center">
                      <span className="text-red-500 font-semibold">
                        {sec.name} :
                      </span>
                      <span>{displayFormikFieldErrors(formik, sec.name)}</span>
                    </div>
                  )}
                </div>
                {sec.maxChoices !== 1 && (
                  <div
                    className="text-gray-400 font-bold text-base 
                        border border-gray-400 rounded-full
                        h-fit p-2
                        "
                  >
                    <span>
                      {
                        formik.values[sec.name].filter((choice) => choice)
                          .length
                      }
                    </span>
                    <span> of {sec.maxChoices}</span>
                  </div>
                )}
              </div>
              <div className="pb-14 pt-7">
                {sec.maxChoices == 1 ? (
                  <RadiosGroup
                    name={sec.name}
                    wrapperClass="grid grid-cols-3 text-lg"
                    setSelected={(value) => setChoices(sec.name, value)}
                    selected={formik.values[sec.name]}
                    radios={sec.choices.map((choice) => ({
                      text: choice.name,
                      value: choice.value,
                    }))}
                  />
                ) : (
                  <CheckboxesGroup
                    name={sec.name}
                    wrapperClass="grid grid-cols-3 text-lg"
                    setCheckedState={(value) => setChoices(sec.name, value)}
                    checkedState={formik.values[sec.name]}
                    list={sec.choices.map((choice) => ({
                      text: (
                        <div>
                          <div>{choice.name}</div>
                          {choice.price && (
                            <div className="text-xs text-blue-500 whitespace-nowrap">
                              +{RIAL(choice.price)}
                            </div>
                          )}
                        </div>
                      ),
                      value: choice.value,
                    }))}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default CheeseBurgerRightSection;
