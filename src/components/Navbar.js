import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";

import { Accent } from "../styled/Random";

export default function Navbar() {
  const { user, isAuthenticated, logout, loginWithRedirect } = useAuth0();

  return (
    <StyledNavbar>
      <StyledNavBrand>
        <StyledLink to="/">
          Learn.Build.<Accent>Type.</Accent>
        </StyledLink>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highScores">High Scores</StyledLink>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                {user["https://learnbuildtype/username"]} | Log Out
              </button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </li>
        )}
      </StyledNavItems>
    </StyledNavbar>
  );
}
