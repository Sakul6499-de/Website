import React from "react";
import {Link} from "react-router-dom";

import Footer from "../shared/Footer";

import "./Credit.scss";

export default class Legal extends React.Component {
  render(): JSX.Element {
    return (
      <div id="credit">
        <section className="hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Credits</h1>
              <h2 className="subtitle">Building blocks of this website</h2>
            </div>
          </div>
        </section>

        <div className="tile is-parent">
          <div className="tile is-parent">
            <article className="tile is-child notification is-white">
              <h1 className="title">Open-Source</h1>
              <p className="subtitle" />
              <div className="content">
                The entire source code of my website is Open-Source, licensed
                under{" "}
                <Link to="https://choosealicense.com/licenses/mit/">MIT</Link>{" "}
                and can be found on my{" "}
                <Link to="https://gitlab.com/sakul6499.de/sakul6499.de/">
                  GitLab repository
                </Link>
                .
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-parent">
            <article className="tile is-child notification is-primary">
              <h1 className="title">ReactJS</h1>
              <p className="subtitle">JS library for UIs</p>
              <div className="content">
                This website is build using ReactJS,{" "}
                <em>a JavaScript library for building user interfaces</em>.
                <br />
                NodeJS and yarn are used for dependencies and to pack everything
                together into one website.
                <br />
                Instead of JavaScript I use TypeScript,{" "}
                <em>
                  a typed superset of JavaScript that compiles to plain
                  JavaScript
                </em>
                .
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-info">
              <h1 className="title">Bulma</h1>
              <p className="subtitle">CSS Framework</p>
              <div className="content">
                This website is designed using{" "}
                <Link to="https://bulma.io/">Bulma</Link>,{" "}
                <em>a free, open source CSS framework based on Flexbox</em>.
                <br />
                Bulma makes it extremely easy to design responsive (flex)
                user-interfaces. It is even possible to create websites without
                own stylesheets.
                <br />I still added some things myself and modified some of the
                component, but this websites design-core is Bulma.
              </div>
            </article>
          </div>
        </div>

        <div className="tile is-parent">
          <div className="tile is-parent">
            <article className="tile is-child notification is-warning">
              <h1 className="title">Trianglify</h1>
              <p className="subtitle">Headers</p>
              <div className="content">
                Have you seen these fancy headers on the{" "}
                <Link to="/">main page</Link> and my{" "}
                <Link to="/blog">blog</Link>?
                <br />
                These are made with{" "}
                <Link to="https://trianglify.io/">Trianglify</Link>!
                <br />
                Checkout there{" "}
                <Link to="https://github.com/qrohlf/trianglify">
                  GitHub repository
                </Link>{" "}
                and{" "}
                <Link to="https://www.npmjs.com/package/trianglify">
                  NPM package
                </Link>
                .
              </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <h1 className="title">Icons</h1>
              <p className="subtitle" />
              <div className="content">
                Most, if not all, icons are provided by{" "}
                <Link to="https://react-icons.netlify.com/#/">React-Icons</Link>
                , which lets you{" "}
                <em>include popular icons in your React projects easily</em>.
                <br />
                It supports multiple icon libraries, such as:
                <ul>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/fa">
                      Font Awesome
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/io">
                      Ionicons
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/md">
                      Material Design Icons
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/ti">
                      Typicons
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/go">
                      Github Octiocons Icons
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/fi">
                      Feather
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/gi">
                      Game Icons
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/wi">
                      Weather Icons
                    </Link>
                  </li>
                  <li>
                    <Link to="https://react-icons.netlify.com/#/icons/di">
                      Devicons
                    </Link>
                  </li>
                </ul>
                There even is a{" "}
                <Link to="https://www.npmjs.com/package/react-icons">
                  NPM Package
                </Link>{" "}
                for it!
              </div>
            </article>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}