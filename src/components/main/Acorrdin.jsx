import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicAccordion() {
  const data = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    },
  ];

  const style = { background: "#ffffff", marginBottom: "10px",borderRadius: "10px !important",
  border:" 2px solid#E2E2E2",
   }

  
  return (
    <div>
     
      {data.map((item,index)=>(
         <Accordion sx={style}>
         <AccordionSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1a-content"
           id="panel1a-header"
         >
           <Typography>
            {item.title}
           </Typography>
         </AccordionSummary>
         <AccordionDetails>
           <Typography>
           {item.answer}
           </Typography>
         </AccordionDetails>
       </Accordion>
      )

      )}
    </div>
  );
}

// import * as React from "react";
// import { useState } from "react";
// import styled from "styled-components"
// //import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function BasicAccordion() {
//   const [active, setActive] = useState(false);
//   const Container = styled.div`
//     width: 844px;
//     margin: auto;
//   `;
//   const Item = styled.div`
//     width: 100%;
//     border-radius: 10px;
//     border: 1px solid #e2e2e2;
//     background: #fff;
// & .active {
//   height: max-content !important;
// }
// & .content {
//   height: 0;
//   overflow: hidden;
// }
//   `;
//   return (
//     <Container>
//       <Item>
//         <div className="title">
//           <h3>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry?
//           </h3>
//         </div>
//         <p className={`content ${active? "active":""}`}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat.
//         </p>
//       </Item>
//       <Item>
//         <div className="title">
//           <h3>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry?
//           </h3>
//         </div>
//         <p className={`content ${active? "active":""}`}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat.
//         </p>
//       </Item>
//     </Container>
//   );
// }
