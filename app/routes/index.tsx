import { Link } from "@remix-run/react";

export interface IHomePage {

}

export default function HomePage() {

  const formLinkA113 = { 
    to: "A113",
    urlSegment: "/A113",
    label: "Form A113"
  };

  const formLinkA114 = {
    to: "A114",
    urlSegement: "/A114",
    label: "Form A114"
  };
  const formLinkA115 = {
    to: "A115",
    urlSegement: "/A115",
    label: "Form A11 5"
  };

  return (
    <article className="prose prose-xl">
      <h1>Hi, welcome to the form page.</h1>
      <p>Please select the form you want from the list.</p>
      {/* TODO: show list of forms */}
      {/* TODO: when user selects a form generate unique form instance. Timestamp and save unique ID of form instance in form instance log*/}
      {/* TODO: redirect to unique form instance page */}
      <ul>
        <li>
          <Link to={formLinkA113.to} >{formLinkA113.label}</Link>
        </li>
        <li>
          <Link to={formLinkA114.to} >{formLinkA114.label}</Link>
        </li>
        <li>
          <Link to="A115">form A115</Link>
        </li>
      </ul>
    </article>
  );
}
