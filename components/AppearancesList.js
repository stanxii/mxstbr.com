import React from "react";
import { Flex, Box } from "rebass";
import Heading from "./Heading";
import Appearance from "./AppearanceCard";

export default ({ appearances }) => (
  <Flex flexDirection="column" width={734 - 16}>
    {appearances.map((appearance, i) => (
      <React.Fragment key={appearance.title + appearance.site}>
        {!appearances[i - 1] ||
        appearances[i - 1].date.getFullYear() !==
          appearance.date.getFullYear() ? (
          <Flex flexDirection="row" alignItems="center" width={734 - 16} mb={3}>
            <Heading fontSize={3} as="h3" mr={3} width={42 + 10}>
              {appearance.date.getFullYear()}
            </Heading>
            <Box css={{ background: "#BBB", width: "100%", height: "1px" }} />
          </Flex>
        ) : null}
        <Appearance {...appearance} />
      </React.Fragment>
    ))}
  </Flex>
);