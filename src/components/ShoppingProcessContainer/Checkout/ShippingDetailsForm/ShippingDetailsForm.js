import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DynamicForm } from "../../../DynamicForm/DynamicForm";
import { LoadingSpinner } from "../../../LoadingSpinner/LoadingSpinner";
import { ContainerTitle } from "../../../ContainerTitle/ContainerTitle";

import { useAuthenticationContext } from "../../../../contexts/AuthenticationContext";

import { useForm } from "../../../../hooks/useForm";
import { useService } from "../../../../hooks/useService";

import { userShippingDetailsServiceFactory } from "../../../../services/userShippingDetailsService";

import { checkIfFormErrorHasOccurred } from "../../../../utils/checkIfFormErrorHasOccurred";
import { clearInitialFormValuesMessages } from "../../../../utils/clearInitialFormValuesMessages";

import { getData } from "./helpers/getData";

import { FORM_KEYS, INITIAL_FORM_VALUES } from "./initialFormValues";

export const ShippingDetailsForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const { userId } = useAuthenticationContext();

  const userShippingDetailsService = useService(
    userShippingDetailsServiceFactory
  );

  const { values, clickHandler, blurHandler, changeHandler, submitHandler } =
    useForm(INITIAL_FORM_VALUES);

  const onSubmit = async (e) => {
    submitHandler(e);

    const errorOccurred = checkIfFormErrorHasOccurred(values);

    if (!errorOccurred) {
      const data = getData(values);

      try {
        setIsLoading(true);

        await userShippingDetailsService.update(userId, data);

        clearInitialFormValuesMessages(FORM_KEYS, INITIAL_FORM_VALUES);

        navigate("/payment");
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <ContainerTitle title={"Shipping Information"} />
      <DynamicForm
        values={values}
        formKeys={FORM_KEYS}
        clickHandler={clickHandler}
        blurHandler={blurHandler}
        changeHandler={changeHandler}
        initialFormValues={INITIAL_FORM_VALUES}
        buttonTitle={"Continue Checkout"}
        onSubmit={onSubmit}
      />
    </>
  );
};
