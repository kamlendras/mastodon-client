"use client"
import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses }  from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import Home from "./home/page"
import Explore from "./explore/page"
import Box from "@mui/joy/Box";

export default function TabsVertical() {

  return (
    <Box style={{ position: "fixed" }}>
    <Tabs
    
      aria-label="Vertical tabs"
      orientation="vertical"
      sx={{  minHeight: 700 }}
      size="lg"
    >
   
      <TabList
       sx={{
        // pt: 1,
        // justifyContent: 'center',
        [`&& .${tabClasses.root}`]: {
        //   flex: 'initial',
        //   bgcolor: 'transparent',
        //   '&:hover': {
        //     bgcolor: 'transparent',
        //   },
          [`&.${tabClasses.selected}`]: {
            color: 'primary.plainColor',
            '&::after': {
              // height: 40,
              width:5,
              borderRadius: 8,
              // borderTopLeftRadius: 3,
              // borderTopRightRadius: 3,
              bgcolor: 'primary.500',
            },
          },
        },
      }}
      
      
      >
        <Tab><ListItemDecorator>
        <HomeRoundedIcon />
            </ListItemDecorator>Home</Tab>
        <Tab><ListItemDecorator>
       < NotificationsNoneRoundedIcon/>
            </ListItemDecorator>Notifications</Tab>
        <Tab><ListItemDecorator>
        <ExploreRoundedIcon />
            </ListItemDecorator>Explore</Tab>
        <Tab><ListItemDecorator>
        <PublicRoundedIcon/>
            </ListItemDecorator> <span className='nowrap'>Live feed</span></Tab>
        <Tab><ListItemDecorator>
             <AlternateEmailRoundedIcon/>
            </ListItemDecorator> <span className='nowrap'>Private mentions</span></Tab>
        <Tab><ListItemDecorator>
        <BookmarksRoundedIcon />
            </ListItemDecorator>Bookmarks</Tab>
        <Tab><ListItemDecorator>
        <StarBorderPurple500RoundedIcon/>
            </ListItemDecorator>Favourites</Tab>
        <Tab><ListItemDecorator>
        <ListAltRoundedIcon />
            </ListItemDecorator>Lists</Tab>
            <Tab><ListItemDecorator>
        <SettingsSuggestIcon />
            </ListItemDecorator>Preferences</Tab>
      </TabList>
      <TabPanel value={0}>
<Home/>
      </TabPanel>
      <TabPanel value={1}>
        <Explore/>
      </TabPanel>
      <TabPanel value={2}>
    
      </TabPanel>
      <TabPanel value={3}>
      
      </TabPanel>
      <TabPanel value={4}>
    
      </TabPanel>
      <TabPanel value={5}>
       
      </TabPanel>
      <TabPanel value={6}>
 
      </TabPanel>
      <TabPanel value={7}>

      </TabPanel>
     
    </Tabs>
    </Box>
  );
}