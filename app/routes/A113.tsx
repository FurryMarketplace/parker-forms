import { Link } from "@remix-run/react";
import { processForm } from "~/logic/helper";


export default function A113form() {

  processForm()

  return (
    <article className="prose prose-xl">
      <h1>Welcome to A113form</h1>
      <p>This is the  A113form</p>
      {/* TODO: display form questions with input fields. */}
      {/* TODO: display select field "Is this the right form Y/N?" */}
      {/* TODO: short text field-"Name" */}
      {/* TODO: Text area field-"Who do you think spider man is?" */}
     
      
      
      
      {/* Provide navigation with a cancel and submit link */}
      <ul>
        <li>
          <Link to="/">Cancel</Link>
        </li>
        <li>
          <Link to="/StatusPage">Status Page</Link>
        </li>
      </ul>
    </article>
  );
}