import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState, Fragment } from "react";

const AccordionMobile = (props: any) => {
  const { moreLessButton, text, title } = props;
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Fragment>
      <Accordion open={open === 1} animate={customAnimation}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="flex justify-center font-DynaPuff text-sm sm:text-2xl  sm:remove-item "
        >
          {title}
        </AccordionHeader>
        <AccordionBody className="font-DynaPuffflex  text-xxs sm:text-1xl text-center">
          {text}
          {moreLessButton}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};
export default AccordionMobile;
