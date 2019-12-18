import * as isActive from "./activityFns.js";
import * as singleSpa from "single-spa";

singleSpa.registerApplication(
  "andersSvelter",
  () => SystemJS.import("@portal/andersSvelter"),
  isActive.anders
);

singleSpa.registerApplication(
  "createMeeting",
  () => SystemJS.import("@portal/createMeeting"),
  isActive.create
);

singleSpa.registerApplication(
  "meetings-overview",
  () => SystemJS.import("@portal/meetings"),
  isActive.meetings
);

singleSpa.start();
