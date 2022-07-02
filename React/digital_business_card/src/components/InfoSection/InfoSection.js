import smile from "../../images/smile.jpg";
import Name from "./Name";
import JobDescription from "./JobDescription";
import Website from "./Website";

function InfoSection() {
  return (
    <>
      <img src={smile} alt="joe profile" />
      <Name />
      <JobDescription />
      <Website />
    </>
  );
}

export default InfoSection;
