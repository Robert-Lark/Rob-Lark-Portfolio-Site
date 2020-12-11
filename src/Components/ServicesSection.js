import React from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const ServicesSection = (props) => {
  return (
    <StyledServices>
      <StyledDescription>
        <h2>
          High <span> quality</span> Services
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="icon">
              <img src={clock} alt="icon" />
              <h3>Efficient</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h3>Teamwork</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h3>Efficient</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </StyledCard>
          <StyledCard>
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Affordable</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </StyledCard>
        </StyledCards>
      </StyledDescription>
      <StyledImage>
        <img src={home2} alt="" />
      </StyledImage>
    </StyledServices>
  );
};

const StyledServices = styled(StyledAbout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const StyledCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
