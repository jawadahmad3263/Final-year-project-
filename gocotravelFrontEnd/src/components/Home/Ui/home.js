import React from "react";
import image from "../assets/icons/pexels-elijah-o'donnell-5409363.jpg";
//import Hero from "../Ui/hero"
import ContactUs from "../Ui/contactUs";
import AboutUs from "../Ui/aboutUs";
import Footer from "../Ui/footer";
import {
  Col,
  Row,
  Image,
  Form,
  DatePicker,
  TimePicker,
  Input,
  Button,
} from "antd";
import {
  SearchOutlined,
  RiseOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
// import "../assets/style/home.css";
import Bimage from "../assets/icons/landingimage.jpg";
import { Typography } from "antd";
// import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const { Title } = Typography;

const Home = (props) => {
  return (
    <>
      {/* <Row className={"sectionIst"}>
        <Col span={24}>
          <Title className={"HometitleCss"} level={2}>
            Go any where any time Search a ride now.
            <Button
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              onClick={() => props.history.push("/searchRide")}
            >
              Search
            </Button>
          </Title>
        </Col>
      </Row>

      <Row className={"sectionSnd"}>
        <Col span={8}>
          <Image src={image} className={"rideImage"}></Image>
        </Col>
        <Col span={8}>
          <Title className={"sndtitle"} level={2}>
            Driving in Your Car soon?
          </Title>
          <Title className={"sndsmalltitle"} level={5}>
            Let's make this your least expensive journey ever.
          </Title>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            onClick={() => props.history.push("/ride")}
          >
            Offer a Ride
          </Button>
        </Col>
      </Row>
      <Row className={"thirdSection"}>
        <Col span={24}>
          <Title level={3}>Hey! Go literally wherever You want </Title>
        </Col>
        <Col span={8}>
          <Title level={5}>
            <b>Simple</b> <br />
            Enter your exact address to find
            <br /> the perfect ride. Choose who you’d like
            <br /> to travel with. And book!{" "}
          </Title>
        </Col>
        <Col span={8}>
          <Title level={5}>
            <b>Smart</b>
            <br />
            With access to millions of journeys,
            <br /> you can quickly find people nearby
            <br /> travelling your way.
          </Title>
        </Col>
        <Col span={8}>
          <Title level={5}>
            <b>Seamless</b>
            <br />
            Get to your exact destination,
            <br /> without the hassle. No queues. <br />
            No waiting around.
          </Title>
        </Col>
      </Row>

      <Row className={"thirdSectionPartTwo"}>
        <Col span={24}>
          <Title level={3}>Three things you'll love about GoCoTravel</Title>
        </Col>
        <Col span={8}>
          <Title level={5}>
            <b>Choice</b> <br />
            We go everywhere.
            <br /> Literally thousands of destinations.
            <br /> No station required.{" "}
          </Title>
        </Col>
        <Col span={8}>
          <Title level={5}>
            <b>Time Saving</b>
            <br />
            No need to trek across town, <br />
            catch a ride leaving near you.
          </Title>
        </Col>
        <Col span={8}>
          <Title level={5}>
            <b>Community</b>
            <br />
            We take the time to get to know our members.
            <br /> All profiles and ratings are checked.
            <br /> IDs are properly verified.
            <br /> So you know who you’re travelling with.
          </Title>
        </Col>
      </Row>
      <Row className={"lastSection"}>
        <Col span={24}></Col>
      </Row> */}

      {/* ////////// */}
      <div id="main_hero">
        <div className="bottom_section">
          <h1 className="text_5">Go any where any time Search a ride now.</h1>

          <div>
            <Button
              className="search_btn"
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              onClick={() => props.history.push("/searchRide")}
            >
              Search
            </Button>
          </div>
        </div>

        <div className="text_1">
          {" "}
          <span className="text_2">GOCO</span> TRAVEL
          <h1 className="text_3">WE ARE ALWAYS THERE AT YOUR SERVICE</h1>
        </div>

        <div className="bottom_left">
          <div>
            <h1 className="bottom_left_text_1"> Driving in Your Car soon?</h1>
          </div>
          <div>
            <p className="bottom_left_text_2">
              {" "}
              Let's make this your least expensive journey ever
            </p>
          </div>
          <div>
            <Button
              className="search_btn"
              type="primary"
              icon={<PlusCircleOutlined />}
              onClick={() => props.history.push("/ride")}
            >
              Offer a Ride
            </Button>
          </div>
        </div>
      </div>

      <ContactUs />
      <AboutUs />
      <Footer />
    </>
  );
};
export default Home;
