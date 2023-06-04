// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// export default function SimpleAccordion({ aboutInfo }) {
//   return (
//     <div>
//       {aboutInfo.map(({ id, title, info }) => (
//         <Accordion key={id}>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Typography>{title}</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography>{info}</Typography>
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </div>
//   );
// }

import React, { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { HiOutlineClock } from "react-icons/hi";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function SimpleAccordion({ aboutInfo }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-100 to-white p-4 md:p-16 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <Fragment>
          {aboutInfo?.map(({ id, title, info, infoArr, infoArray }) => (
            <Accordion
              key={id}
              open={open === id}
              icon={<Icon id={id} open={open} />}
            >
              <AccordionHeader
                onClick={() => handleOpen(id)}
                className="text-gray-700 font-medium text-lg text-left"
              >
                {title}
              </AccordionHeader>

              <AccordionBody className="">
                {!infoArr && <p className="font-normal">{info}</p>}
                {infoArr && (
                  <div className="w-[90%] m-auto text-base space-y-6">
                    {infoArray.map(({ id, name, smallInfo }) => (
                      <li className="list-none space-y-3" key={id}>
                        <p className="w-full flex flex-row space-x-1 text-lg font-medium">
                          <HiOutlineClock size={22} className="mt-1 text-sky-600" /> <span>{name}</span>
                        </p>
                        <p>{smallInfo}</p>
                      </li>
                    ))}
                  </div>
                )}
              </AccordionBody>
            </Accordion>
          ))}
        </Fragment>
      </div>
    </div>
  );
}
