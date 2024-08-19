import { Container } from "react-bootstrap";
import { person } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DataAction from "./components/DataAction";
import { useState } from "react";

function App() {
  const [personData, setPersonData] = useState(person);

  const onDelete = () => {
    setPersonData([]);
  };

  const onView = () => {
    setPersonData(person);
  };

  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData} />
        <DatesList person={personData} />
        <DataAction deleteData={onDelete} onView={onView} />
      </Container>
    </div>
  );
}

export default App;
