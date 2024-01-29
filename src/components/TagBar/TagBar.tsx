import { Badge } from "@twilio-paste/core/badge";
import { Theme } from "@twilio-paste/core/theme";
import React from "react";

const TagBar = (): JSX.Element | null => {
  return (
    <Theme.Provider theme="default">
      <Badge as="span" variant="decorative30">
        Test badge
      </Badge>
    </Theme.Provider>
  );
};

TagBar.displayName = "TagBar";
export default TagBar;
