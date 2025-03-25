"use client"
import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import { Container, Row, Col } from 'react-grid-system';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import StarBorderPurple500RoundedIcon from '@mui/icons-material/StarBorderPurple500Rounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
export default function BasicGrid() {
    return (
        <>
         <Divider/>
            <Container>
                <Row>
                    <Col sm={10}>
                    <Row>
                        <Col sm={1}>
                            <Avatar>JG</Avatar>
                            </Col>

                            <Col sm={2}>
                            <Col sm={12}>
                            <span className='nowrap'>Jeff Jarvis</span>
                            </Col>
                            <Col sm={12}>
                                @jeffjarvis
                            </Col>
                        </Col>
                        </Row>
                    </Col>

                    <Col sm={2}>
                        <PublicRoundedIcon />21h
                    </Col>
                </Row>
            </Container>
            <Divider/>
            <Typography level="title-md"
              sx={{
                p: 1,
              }}>Well that was a revealing moment: Mika introduces Molly Ball and her story about "how Democrats are taking their anger out on Chuck Schumer," and then  adds: "Yeah, I kinda know how he feels."
            Yup. Still angry at bended knees: Paul Weiss, Columbia, ABC, WaPo, Schumer, MorningJoe</Typography>
            <center>
            <Zoom >
    <img className='feedimage'
      alt="That Wanaka Tree, New Zealand by Laura Smetsers"
      src="https://files.mastodon.social/cache/preview_cards/images/138/632/324/original/76160c41e13a9bde.jpg"
      width="550"
    />
  </Zoom></center>
  <Container>
                <Row>
                  

                    <Col sm={2.4}>
                        <ReplyRoundedIcon style={{ fontSize: 24 }}/>
                    </Col>
                    <Col sm={2.4}>
                        <RepeatRoundedIcon style={{ fontSize: 24 }} />
                    </Col>
                    <Col sm={2.4}>
                        <StarBorderPurple500RoundedIcon  style={{ fontSize: 24 }}/>
                    </Col>
                    <Col sm={2.4}>
                        <BookmarkBorderRoundedIcon style={{ fontSize: 24 }}/>
                    </Col>
                    <Col sm={2.4}>
                        < MoreHorizRoundedIcon style={{ fontSize: 24 }}/>
                    </Col>
                </Row>
            </Container>


        </>
    );
}
