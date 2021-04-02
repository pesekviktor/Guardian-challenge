import React from "react";
import { Helmet } from "react-helmet-async";
import { Route, Switch } from "react-router-dom";

import GlobalStyle from "../global-styles";
import { TabbedView } from "../components/TabbedView";
import { NotFound } from "./NotFound";
import { NewsFeed } from "./NewsFeed";

export const App = () => (
  <>
    <Helmet titleTemplate="%s - Guardian Task" defaultTitle="Guardian Task">
      <meta
        name="description"
        content="A task based on https://github.com/guardian/clientside-tabs-challenge"
      />
    </Helmet>
    <Switch>
      {/* Would be loaded lazy in production and navigated to a page*/}
      <Route
        exact
        path="/"
        component={() =>
          TabbedView({
            tabs: [
              {
                tabLabel: "Uk News",
                renderTab: () =>
                  NewsFeed({
                    feedQuery: "uk%20news",
                  }),
              },
              {
                tabLabel: "Football",
                renderTab: () =>
                  NewsFeed({
                    feedQuery: "football",
                  }),
              },
              {
                tabLabel: "Travel",
                renderTab: () =>
                  NewsFeed({
                    feedQuery: "travel",
                  }),
              },
            ],
          })
        }
      />
      <Route component={NotFound} />
    </Switch>
    <GlobalStyle />
  </>
);
