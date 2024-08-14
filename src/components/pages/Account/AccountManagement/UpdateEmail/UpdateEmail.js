import { useState } from "react";

import { Button } from "../../../../reusable/Button/Button";
import { UpdateEmailForm } from "./UpdateEmailForm/UpdateEmailForm";
import { Popup } from "../../../../reusable/Popup/Popup";

export const UpdateEmail = () => {
  const [displayPopup, setDisplayPopup] = useState(false);

  const toggleDisplayPopup = () => {
    setDisplayPopup((displayPopup) => !displayPopup);
  };

  return (
    <>
      <Button
        title={"Update Email Address"}
        callBackFunction={toggleDisplayPopup}
        variant={"underlined"}
      />
      {displayPopup && (
        <Popup
          popupCloseHandler={toggleDisplayPopup}
          title={"Update Email"}
          textAlign={"align-center"}
          modalVariant={"small"}
        >
          <UpdateEmailForm />
        </Popup>
      )}
    </>
  );
};
