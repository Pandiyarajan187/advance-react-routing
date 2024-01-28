import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

export default function ErrorPage() {
  const errors = useRouteError();

  let title = "An Error Occured";
  let message = "Something Went Wrong";

  if (errors.status === 500) {
    message = errors.data.message;
  }

  if (errors.status === 404) {
    title = "Not Found";
    message = "Could Not Find Page";
  }
  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
