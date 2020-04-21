export interface ButtonProps {
  /**
   * Press handler function
   * This will be ignored if href is preset or if disabled
   */
  onPress: (e: any) => void;
  /**
   * The content to be rendered inside of the button
   * If present, this prop will override any other content props
   */
  children?: React.ReactNode;
  /**
   * used for styled components
   */
  className?: string;
  /**
   * w3 "disabled" property
   */
  disabled?: boolean;
  /**
   * Use button as a url. This will cause the "onClick" handler to be ignored
   */
  href?: string;
  /**
   * Set the size of the button
   * @default "l"
   */
  size?: "s" | "m" | "l";
  /**
   * Text to be rendered inside button. This will be ignored if children are present
   */
  title?: string;
  /**
   * w3 button prop type. ("button", "reset", "submit")
   */
  type?: "button" | "reset" | "submit";
  /**
   * Which type of button?
   */
  variant?: "primary" | "secondary" | "tertiary";
  /**
   * Style
   */
  style?: any;
}
