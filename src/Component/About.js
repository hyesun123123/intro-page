import React, { useState } from "react";
import "../css/about.css";
import "../css/Tablet/tablet_about.css";
import "../css/Moblie/moblie_about.css";

const About = () => {
  const [img, setImg] = useState(
    "https://user-images.githubusercontent.com/40871065/98507060-325d0200-22a0-11eb-8118-d950624c5116.jpg"
  );
  const [blog, setBlog] = useState([
    "https://github.com/hyesun123123",
    "https://github.com/hyesun123123",
  ]);
  const [info, setInfo] = useState([
    {
      id: 1,
      text: "한 혜 선",
      flex: true,
    },
    {
      id: 2,
      text: "Front-end Developer, Data Analysis",
    },
    {
      id: 3,
      text: "1998년 10월 02일",
    },
    {
      id: 4,
      text: "인천광역시 연수구, 충청남도 천안시",
    },
    {
      id: 5,
      text: "인천대학교 컴퓨터공학부",
    },
    {
      id: 6,
      text:
        " 저는 이러한 개발자가 되고 싶습니다. 어떻게 하면 사용자가 편리할지 \
      어떻게 하면 내가 속한 집단에 도움을 가져다 줄수 있을지, 어떻게 하면 \
      이 어플리케이션이 최고가 될지 끝 없이 생각하는 개발자가 되고 싶습니다.\
      덧붙여 제가 하고자 하는 일이 정말 너무나 재미있습니다. 내가 만든 프로그램이 동작하는 것이 \
      너무나 즐겁습니다. 앞으로 너무나도 많은 시행착오가 있겠지만 \
      모르는 것이 있다면 끝까지 학습하는 자세를 가지겠습니다. 최선을 다 하겠습니다.",
    },
  ]);

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__title">About</div>
        <div className="about__info info">
          <div className="info__avatar">
            <img src={img} alt="avatar" />
          </div>
          <div className="info__info">
            <ul className="info__list">
              {info.map((value) => {
                return value.flex ? (
                  <li
                    className={`info__list--${value.id} info--list`}
                    key={value.id}
                  >
                    <span>{value.text}</span>
                    <div>
                      <div className="github">
                        <a href={blog[0]} target="_blank">
                          <div className="github__mark"></div>
                        </a>
                      </div>
                      <div className="blog">
                        <a href={blog[1]} target="_blank">
                          <div className="blog__mark"></div>
                        </a>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li
                    className={`info__list--${value.id} info--list`}
                    key={value.id}
                  >
                    {value.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
