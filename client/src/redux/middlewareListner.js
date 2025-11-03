import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { loginUserAction, registerUserAction } from "../auth/rtk/auth.action";
import { createProfileAction } from "../profile/rtk/profile.action";

export const listnerMiddleware = createListenerMiddleware();
// will help u to create the listener middleware

export const setupListeners = (navigate) => {
  // situation or criteria to listen and perform the action agains the matched criteria/ situation
  listnerMiddleware.startListening({
    matcher: isAnyOf(
      registerUserAction.fulfilled,
      loginUserAction.fulfilled,
      createProfileAction.fulfilled
    ),
    // effect : action
    effect: async (action, listenerApi) => {
      // navigate to dashboard
      console.log("inside the listenr");
      navigate("/dashboard");
    },
  });
};
