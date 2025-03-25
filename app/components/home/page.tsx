import Sheet from '@mui/joy/Sheet';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Typography from '@mui/joy/Typography';
import '@fontsource/inter';
import Divider from '@mui/joy/Divider';
import Card from '../feed/card'
import { Container, Row, Col } from 'react-grid-system';
import TextBox from "../textbox"
export default function Home() {
  return (

    <>

<Container>
                <Row>

                    <Col sm={6}>
                    <Sheet variant="outlined" color="neutral" sx={{
        borderRadius: "sm",
        width: 4 / 4

      }}

      >
        <Typography level="h3"><HomeRoundedIcon style={{ fontSize: 30 }} />   Home</Typography>
        <Divider />
        <div className='scroll'>
          <div >
            <Card />
          </div>
          <div>
            <Card />
          </div>
          <div >
            <Card />
          </div>
          <div >
            <Card />
          </div>
        </div>
      </Sheet>
                    </Col>
                    <Col sm={6}>
                    <Sheet variant="outlined" color="neutral" sx={{
        borderRadius: "sm",
        width: 2 / 4

      }}

      ><TextBox/>
      </Sheet>

                    </Col>
                </Row>
            </Container>




     
     
    </>
  );
}