import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState, Fragment } from "react";

const AccordionMobile = (props: any) => {
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
        <AccordionHeader onClick={() => handleOpen(1)}>
          {props.title}
        </AccordionHeader>
        <AccordionBody>{props.text}</AccordionBody>
      </Accordion>
    </Fragment>
  );
};
export default AccordionMobile;