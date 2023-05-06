import { ComponentType, ReactNode } from "react"
import { TouchableWithoutFeedback, Keyboard, View } from "react-native"

type Props = {
  children?: ReactNode
}

const DismissKeyboardHOC = <P extends object>(
  Comp: ComponentType<P>
): ComponentType<P & Props> => {
  return ({ children, ...props }: Props & P) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Comp {...(props as P)}>{children}</Comp>
    </TouchableWithoutFeedback>
  )
}

export const DismissKeyboardView = DismissKeyboardHOC(View)
