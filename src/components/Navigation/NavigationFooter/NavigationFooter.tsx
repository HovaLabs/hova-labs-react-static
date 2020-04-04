import React from "react";
import { Text } from "@hova-labs/bento-box-web";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { ContainerWithBorder } from "../../Container/ContainerWithBorder";
import * as S from "./NavigationFooterStyles";

export const NavigationFooter: React.FC<{}> = () => {
  const url =
    "https://thehovas.us7.list-manage.com/subscribe/post?u=fb29e5e7300f5947c068a436e&amp;id=5c71d274c5";
  // a basic form
  const CustomForm = ({ status, message, onValidated }) => {
    let email;
    let fname;
    let lname;
    const submit = () =>
      email &&
      fname &&
      lname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value,
      });
    const statusText = {
      sending: "Sending...",
      success: "Success! Thanks",
    };
    const buttonText = ["sending", "success"].includes(status)
      ? statusText[status]
      : "Submit";
    return (
      <>
        <S.InputsArea>
          <S.Input
            ref={(node) => (fname = node)}
            type="text"
            placeholder="Hans"
          />
          <S.Input
            ref={(node) => (lname = node)}
            type="text"
            placeholder="Hova"
          />
          <S.Input
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your email"
          />
          <S.Button onClick={submit}>{buttonText}</S.Button>
        </S.InputsArea>
        <S.StatusArea>
          {status === "error" && (
            <div dangerouslySetInnerHTML={{ __html: message }} />
          )}
        </S.StatusArea>
      </>
    );
  };
  return (
    <>
      <ContainerWithBorder>
        <S.ContainerMailingList>
          <div>
            <Text typography="headingMedium">Join our mailing list</Text>
            <Text typography="bodyText">for updates and news</Text>
          </div>
          <S.InputsArea>
            <MailchimpSubscribe
              url={url}
              render={({ subscribe, status, message }) => (
                <div>
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                </div>
              )}
            />
          </S.InputsArea>
        </S.ContainerMailingList>
      </ContainerWithBorder>
      <ContainerWithBorder>
        <S.ContainerCopyright>
          <Text typography="bodyText">
            {`Copyright Hova Labs 2019 - ${new Date()
              .getFullYear()
              .toString()}`}
          </Text>
        </S.ContainerCopyright>
      </ContainerWithBorder>
    </>
  );
};
