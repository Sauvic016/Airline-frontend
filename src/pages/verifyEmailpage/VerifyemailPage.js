import { useSearchParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Button from "../../common/Button";

const VerificationPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const navigate = useNavigate();

  const verifyEmail = async () => {
    const response = await fetch(`${process.env.REACT_APP_AUTH_API_URL}/verify-email/?token=${token}`);
    return response.json();
  };

  const { data, isLoading, isError } = useQuery(["verifyEmail", token], verifyEmail);

  if (isLoading) {
    return <div className="text-center text-4xl mt-40">Verifying email...</div>;
  }

  if (isError) {
    return (
      <div className="text-center">
        <div className="text-center text-4xl mt-40">
          <span role="img" aria-label="error">
            ❌
          </span>{" "}
          Verification failed.
        </div>
        <p className="mt-5">
          Something went wrong in the server, we are trying to resolve the issue. Please try again after sometime.
        </p>
      </div>
    );
  }

  return data.success ? (
    <div className="text-center">
      <div className="text-center text-4xl mt-40">
        <span role="img" aria-label="success">
          ✅
        </span>{" "}
        Account has been verified
      </div>
      <Button
        title={"Back to Home page"}
        customStyle={"bg-primarypurple text-white py-3 px-5 font-semibold lg:font-semibold mt-5"}
        onClick={() => navigate("/", { replace: true })}
      />
    </div>
  ) : (
    <div className="text-center">
      {" "}
      <div className="text-center text-4xl mt-40">
        <span role="img" aria-label="error">
          ❌
        </span>{" "}
        Email verification failed
      </div>
      <p className="mt-5">{data.message}</p>
    </div>
  );
};

export default VerificationPage;
