import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Text } from "../..";
import { Button } from "../../Button/Button";
import { TitlePrimary } from "../../Title/TitlePrimary/TitlePrimary";
import {
  ContainerContent,
  ContainerFlex,
  ContainerWithBorder,
} from "../../Container";
import * as S from "./NavigationFooterStyles";

export const NavigationFooter: React.FC<{}> = () => {
  const url =
    "https://thehovas.us7.list-manage.com/subscribe/post?u=fb29e5e7300f5947c068a436e&amp;id=5c71d274c5";
  // a basic form
  const CustomForm = ({ status, message, onValidated }) => {
    let email;
    let fname;
    const submit = () =>
      email &&
      fname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
      });
    const statusText = {
      sending: "Sending...",
      success: "Success! Thanks",
    };
    const buttonText: string = ["sending", "success"].includes(status)
      ? statusText[status]
      : "Submit";
    return (
      <>
        <S.InputsArea>
          <S.Input
            ref={(node) => (fname = node)}
            type="text"
            placeholder="name"
          />
          <S.Input
            ref={(node) => (email = node)}
            type="email"
            placeholder="email"
          />
          <Button onPress={submit} title={buttonText} />
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
        <ContainerFlex>
          <ContainerContent flexXL="100">
            <div>
              <TitlePrimary
                subtitle="updates and news"
                title="Join our mailing list"
              />
            </div>
          </ContainerContent>
          <ContainerContent flexXL="100">
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
          </ContainerContent>
        </ContainerFlex>
      </ContainerWithBorder>
      <ContainerWithBorder>
        <ContainerFlex>
          <Text typography="bodyText">
            {`Copyright Hova Labs 2019 - ${new Date()
              .getFullYear()
              .toString()}`}
          </Text>
        </ContainerFlex>
      </ContainerWithBorder>
    </>
  );
};
