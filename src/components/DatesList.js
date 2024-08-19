import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesList = ({ person }) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8">
        <div className="rectangle">
          {person.length ? (
            person.map((item) => {
              return (
                <div className="d-flex border-bottom">
                  <img className="img-avatar p-2" src="person.jpg" alt="ssa" />
                  <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.date}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h2 className="p-5 text-center">لا يوجد مواعيد اليوم</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
