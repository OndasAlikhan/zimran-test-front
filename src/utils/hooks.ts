import { useEffect, useState } from "react";

export const useMediaQuery = () => {
  const [lgMatches, setLgMatches] = useState(false);
  const [mdMatches, setMdMatches] = useState(false);
  const [smMatches, setSmMatches] = useState(false);
  useEffect(() => {
    const matchLgQuery = window.matchMedia("(min-width: 1024px)");
    const matchMdQuery = window.matchMedia("(min-width: 768px)");
    const matchSmQuery = window.matchMedia("(min-width: 425px)");

    setLgMatches(matchLgQuery.matches);
    setMdMatches(matchMdQuery.matches);
    setSmMatches(matchSmQuery.matches);

    function handleLgChange(e) {
      setLgMatches(e.matches);
    }
    function handleMdChange(e) {
      setMdMatches(e.matches);
    }
    function handleSmChange(e) {
      setSmMatches(e.matches);
    }
    matchLgQuery.addEventListener("change", handleLgChange);
    matchMdQuery.addEventListener("change", handleMdChange);
    matchSmQuery.addEventListener("change", handleSmChange);

    return () => {
      matchLgQuery.removeEventListener("change", handleLgChange);
      matchMdQuery.removeEventListener("change", handleMdChange);
      matchSmQuery.removeEventListener("change", handleSmChange);
    };
  }, []);
  return {
    sm: smMatches,
    md: mdMatches,
    lg: lgMatches,
  };
};
