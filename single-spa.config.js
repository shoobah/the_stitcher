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
  "kent",
  () => SystemJS.import("@portal/kent"),
  isActive.kent
);

singleSpa.start();
