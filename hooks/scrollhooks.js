import { useRef } from "react";

export const useScrollhook = () => {
  const refHome = useRef(null);
  const refPlaces = useRef(null);
  const refOurMission = useRef(null);
  const refTeam = useRef(null);
  const refWorkaround = useRef(null);
  return {
    refHome,
    refOurMission,
    refPlaces,
    refTeam,
    refWorkaround,
  };
};
