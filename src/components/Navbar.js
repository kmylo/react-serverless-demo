import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useTheme from "../hooks/UseTheme";

import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";

import { StyledButtonLink, StyledButton } from "../styled/Buttons";
import { Accent } from "../styled/Random";

export default function Navbar({ toggleTheme }) {
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
              <StyledButtonLink
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                {user["https://learnbuildtype/username"]} | Log Out
              </StyledButtonLink>
            </li>
          </>
        ) : (
          <li>
            <StyledButtonLink onClick={() => loginWithRedirect()}>
              Log In
            </StyledButtonLink>
          </li>
        )}
        <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
      </StyledNavItems>
    </StyledNavbar>
  );
}
