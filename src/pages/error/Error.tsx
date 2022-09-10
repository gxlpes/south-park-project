import { ErrorSection } from "./Stylex";

const Error = () => {
  return (
    <>
      <ErrorSection>
        <h1>OOPS!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <i>Error 404</i>
      </ErrorSection>
    </>
  );
};

export default Error;
