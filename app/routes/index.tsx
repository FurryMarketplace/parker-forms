import { Link } from "@remix-run/react";
import { getFormLinks } from "~/logic/helper";

export interface IHomePage {

}

export default function HomePage() {

  const formLinks = getFormLinks();
  

  return (
    <article className="prose prose-xl">
      <h1>Hi, welcome to the form page.</h1>
      <p>Please select the form you want from the list.</p>
      {/* TODO: show list of forms */}
      {/* TODO: when user selects a form generate unique form instance. Timestamp and save unique ID of form instance in form instance log*/}
      {/* TODO: redirect to unique form instance page */}
      <ul>
        {
          formLinks.map( (formlink) =>
            <li key={formlink.id} >
              <Link to={formlink.urlSegment} >{formlink.label}</Link>
            </li>
          )
        }
      </ul>
    </article>
  );
}
