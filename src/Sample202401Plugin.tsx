import React from "react";
import * as Flex from "@twilio/flex-ui";
import { FlexPlugin } from "@twilio/flex-plugin";

import CustomTaskList from "./components/CustomTaskList/CustomTaskList";
import TagBar from "./components/TagBar/TagBar";

const PLUGIN_NAME = "Sample202401Plugin";

export default class Sample202401Plugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   */
  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    const options: Flex.ContentFragmentProps = { sortOrder: -1 };
    flex.AgentDesktopView.Panel1.Content.add(
      <CustomTaskList key="Sample202401Plugin-component" />,
      options
    );
    flex.TaskCanvas.Content.add(
      <TagBar key="Sample202401Plugin-tagbar" />,
      options
    );
  }
}
