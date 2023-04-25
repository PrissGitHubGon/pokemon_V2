import { ChildrenPropsInterface } from "./childrenProps-interface";

export type AccordionPropsInterface = {
  moreLessButton: ChildrenPropsInterface;
  text: string;
  title: string;
  classNameHeader: string;
  classNameBody: string;
};
