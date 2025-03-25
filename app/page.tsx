import Image from "next/image";
import SideBar from "./components/sidebar"
import Sheet from '@mui/joy/Sheet';

export default function Home() {
  return (
    <>
    <Sheet variant="soft" color="neutral" sx={{  mx:30,
     borderRadius: "xl", 
            boxShadow: "xl",
            
           }}>
    <SideBar/>
    </Sheet>
    
    </>
  );
}
