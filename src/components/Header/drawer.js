import * as React from "react";
import Drawer from "@mui/material/Drawer";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import "./style.css";

export default function TemporaryDrawer() {
  const [drawer, setDrawer] = React.useState(false);


    

   
 
   return (
     <div>
       <IconButton onClick={() => setDrawer(true)}>
         <MenuRoundedIcon className="link" />
       </IconButton>
       <Drawer
         anchor={"right"}
         open={drawer}
         onClose={() => {
           setDrawer(false);
         }}
       >
         <div className="drawer-div">
           <a href="/" className="link">
             <p>home</p>
           </a>
           <a href="/" className="link">
             <p>compare</p>
           </a>
           <a href="/" className="link">
             <p>dashboard</p>
           </a>
           <a href="/" className="link">
             <p>watchlist</p>
           </a>
         </div>
       </Drawer>
     </div>
   );
}
